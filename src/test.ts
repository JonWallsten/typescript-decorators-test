import { configurable, enumerable, injectProps, writable } from './decorators'
import { injectedProps } from './types';

@injectProps
export class Test {
  @enumerable(false)
  @writable(false)
  @configurable(false)
  public prop: string = 'Test'
  public injectedProps: injectedProps;

  constructor() {
    console.log('Constructor: ', this);
    console.group('Properties:');
    for (let property in this) {
      console.log(property, this[property]);
    }
    console.groupEnd();
  }

  @enumerable(false)
  @writable(false)
  @configurable(false)
  getProp(): string {
      return this.prop;
  }

  setProp(value: string): void {
    this.prop = value;
  }
}

