import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// When using different strategies e.g. facebook or google add 'facebook' in the authguard
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
