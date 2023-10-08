import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book, BookCategory, BookFormModel, SubCategory, categories, nextNewId, subcategories } from 'src/model/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  model: BookFormModel = {
    book: {
      id: 1,
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      category: 4,
      subcategories: subcategories.filter(sc => sc.categoryId == 4)
    },
    categories: categories,
    subCategories: subcategories
  };
  selectedCategory: BookCategory = categories.find(c => c.id == 4)!;

  //Access form in component through template reference variable (#bookForm)
  @ViewChild('bookForm') bookForm!: NgForm;

  onSubmit(): void {
    if (this.bookForm.valid) {
      console.log(this.model);
    }
  }

  newBook() {
    this.model.book = { id: 0, title: '', author: '', category: undefined, subcategories: [] };
    this.bookForm.reset(); //clear status flags
  }

  addSubcategory() {
    const categoryId = this.model.book.category!;
    const newSubCategories = this.model.book.subcategories.concat(
      { id: nextNewId(), categoryId: categoryId, name: '' }
    );
    this.model.book.subcategories = newSubCategories;
  }

  removeSubCategory(subC: SubCategory) {
    this.model.book.subcategories = this.model.book.subcategories.filter(sc => sc !== subC);
  }

  categoryChanged(selectedCat: number) {
    //Change the subcategories, because the main category changed
    this.model.book.subcategories = this.model.subCategories.filter(sc => sc.categoryId == selectedCat);
  }
}
