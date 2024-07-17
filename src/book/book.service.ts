import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private bookRepository:Repository<Book>)
  {}
  async create(createBookDto: CreateBookDto) {
    return await this.bookRepository.save(createBookDto)
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number) {
    const book= await this.bookRepository.findOneBy({id});
    if (book) {
      return book
    }else{
      throw new NotFoundException("book not found")
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book= await this.bookRepository.findOneBy({id});
    if (book) {
      await this.bookRepository.update(id,updateBookDto)
      return await this.bookRepository.findOneBy({id});
    }else{
      throw new NotFoundException("book not found")
    }
  }

  async remove(id: number) {
    const book= await this.bookRepository.findOneBy({id});
    if (book) {
      await this.bookRepository.delete(id)
      return  true;
    }else{
      return false
    }  }
}
