import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let authService: AuthService;

  const mockUsersService = {
    findByEmail: jest.fn(email => ({
      id: 1,
      email,
      password: '$2b$10$hashedpasswordmock', // bcrypt hash mock
    })),
  };

  const mockJwtService = {
    sign: jest.fn(() => 'mocked_jwt_token'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should return JWT token on successful login', async () => {
    const result = await authService.login({ email: 'john@example.com', id: 1 });
    expect(result).toEqual({ access_token: 'mocked_jwt_token' });
  });
});
