import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { userDTO } from './dto/user.dto';

@Controller('auth')
@ApiTags('Users')
export class AuthController {
  constructor(private userService: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Agregar un nuevo usuario' })
  @ApiBody({
    type: userDTO,
  })
  async createUser(@Res() res, @Body() createUser: userDTO) {
    const user = await this.userService.createUser(createUser);
    return res.json({
      user,
    });
  }
}
