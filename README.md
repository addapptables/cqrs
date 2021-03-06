# cqrs

- cqrs is a library for nodejs oriented to microservices,
this library is made to work with [nestjs](https://docs.nestjs.com/)

- [Example code](https://github.com/addapptables/example-service)

## Getting Started
To get started, let's install the package through npm:

```
npm i @addapptables/cqrs --S
```

## How to use

- Create commands
```typescript
import { Command } from '@addapptables/cqrs';

export class ClassCommandModel implements ICommandDto, IEventDto {
    id: string;
}

export class CreateUserCommand extends Command<ClassCommandModel> {
    public readonly action = 'action';
    public readonly context = 'context';

    constructor(public readonly data: ClassCommandModel) { super(data); }
}
```

- Create command handlers
```typescript
import { ICommandHandler, CommandHandler, ICommand } from '@addapptables/cqrs';

@CommandHandler({ context: 'context', action: 'action' })
export class CommandHandler implements ICommandHandler<ClassCommandModel> {

    handle = async (command: ICommand<ClassCommandModel>): Promise<void> => {
        // Save in event store
    }

}
```

- Create event handlers
```typescript
import { IEventHandler, IEvent, EventHandler } from '@addapptables/cqrs';

@EventHandler({ context: 'context', action: 'action' })
export class ActionHandler implements IEventHandler<YourActionEvent> {

    handle = async ({ data }: IEvent<YourActionEvent>): Promise<void> => {
        try {
            console.log(data);
        } catch (error) {
            console.log('error', error);
        }
    }

}
```


