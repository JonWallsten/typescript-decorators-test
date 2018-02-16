import { configurable, enumerable, injectOas, writable } from './decorators'
import { $oas } from './types';

@injectOas
export class Test {
  @enumerable(false)
  @writable(false)
  @configurable(false)
  public prop: string = 'Test'
  public $oas: $oas;

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

