import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockUserRepository = {
    save: jest.fn(dto => ({ id: 1, ...dto })),
    find: jest.fn(() => []),
    findOne: jest.fn(() => ({ id: 1, name: 'John', email: 'john@example.com', password: 'hashed' })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: 'UserRepository', useValue: mockUserRepository }, // IMPORTANT: Provide the token you used in @InjectRepository
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
