import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  const mockUsersService = {
    create: jest.fn(dto => ({
      id: 1,
      ...dto,
      password: '$2b$10$hash', // hashed password mock
    })),
    findAll: jest.fn(() => []),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: mockUsersService },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const dto: CreateUserDto = { 
        name: 'John', 
        email: 'john@example.com', 
        password: '123456' 
      };
      const result = await usersController.create(dto);
      expect(result).toEqual({
        id: 1,
        name: 'John',
        email: 'john@example.com',
        password: '$2b$10$hash',
      });
      expect(mockUsersService.create).toHaveBeenCalledWith(dto);
    });
  });
});
