import { ApiProperty } from "@nestjs/swagger"

export class UpdateBookDto  {
    @ApiProperty()
    name:string  
    @ApiProperty()
    count:number
    @ApiProperty()
    price:number
    @ApiProperty()
    author:string  
}
