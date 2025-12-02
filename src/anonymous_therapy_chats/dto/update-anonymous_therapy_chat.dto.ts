import { PartialType } from '@nestjs/mapped-types';
import { CreateAnonymousTherapyChatDto } from './create-anonymous_therapy_chat.dto';

export class UpdateAnonymousTherapyChatDto extends PartialType(CreateAnonymousTherapyChatDto) {}
