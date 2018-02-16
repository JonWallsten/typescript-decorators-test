import { injectedProps } from './types';

export const injectProps = (constructor: Function) => {
  (constructor.prototype.injectedProps as injectedProps) = {
    type: 'testtype',
    parent: {}
  }
}

export const enumerable = (value: boolean): any => {
  return (_target: any, _propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => {
    if (descriptor) {
      descriptor.enumerable = value;
    } else {
      let descriptor = Object.getOwnPropertyDescriptor(_target, _propertyKey) || {};
        if (descriptor.enumerable != value) {
            descriptor.enumerable = value;
            Object.defineProperty(_target, _propertyKey, descriptor);
        }
    }
  }
}

export const writable = (value: boolean): any => {
  return (_target: any, _propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => {
    if (descriptor) {
      descriptor.enumerable = value;
    } else {
      let descriptor = Object.getOwnPropertyDescriptor(_target, _propertyKey) || {};
        if (descriptor.writable != value) {
            descriptor.writable = value;
            Object.defineProperty(_target, _propertyKey, descriptor);
        }
    }
  }
}

export const configurable = (value: boolean): any => {
  return (_target: any, _propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => {
    if (descriptor) {
      descriptor.configurable = false;
    } else {
      let descriptor = Object.getOwnPropertyDescriptor(_target, _propertyKey) || {};
        if (descriptor.configurable != value) {
            descriptor.configurable = value;
            Object.defineProperty(_target, _propertyKey, descriptor);
        }
    }
  }
}

export function nonenumerable(target: any, key: string) {
  // first property defined in prototype, that's why we use getters/setters
  // (otherwise assignment in object will override property in prototype)
  Object.defineProperty(target, key, {
    get: function() {
      return undefined;
    },
    set: function(this: any, val) {
      // here we have reference to instance and can set property directly to it
      Object.defineProperty(this, key, {
        value: val,
        writable: true,
        enumerable: false,
      });
    },

    enumerable: false,
  });
}
