import { ApiProperty } from "@nestjs/swagger"

export class CreateBookDto {
    @ApiProperty()
    name:string  
    @ApiProperty()
    count:number
    @ApiProperty()
    price:number
    @ApiProperty()
    author:string  
}
