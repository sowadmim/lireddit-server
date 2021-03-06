import { Field, InputType } from 'type-graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;
  @Field()
  body: string;
  @Field(() => GraphQLUpload)
  file: FileUpload;
}
