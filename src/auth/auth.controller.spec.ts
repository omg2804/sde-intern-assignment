import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
    validateUser: jest.fn().mockImplementation((email, password) => {
      return { id: 1, email }; // mocked user
    }),
    login: jest.fn().mockImplementation((user) => {
      return { access_token: 'mocked_token' };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return access_token when login is called', async () => {
    const result = await controller.login({ email: 'john@example.com', password: '123456' });
    expect(result).toEqual({ access_token: 'mocked_token' });
  });
});
