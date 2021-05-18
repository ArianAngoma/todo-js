export class Todo {
    static fromJson({id, homework, completed, created}) {
        const temporaryTodo = new Todo(homework)
        temporaryTodo.id = id;
        temporaryTodo.completed = completed;
        temporaryTodo.created = created;

        return temporaryTodo;
    }

    constructor(homework) {
        this.id = new Date().getTime();
        this.homework = homework;
        this.completed = false;
        this.created = new Date();
    }

    printClass() {
        console.log(`${this.homework} - ${this.id}`)
    }
}