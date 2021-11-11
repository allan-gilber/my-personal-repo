export function numberRenderConfig(value) {
  switch (value) {
    case '0':
      {
        return [true, true, false, true, true, true, true];
      }
      
    case '1':
      {
        return [false, true, false, true, false, false, false];
      }
      
    case '2':
      {
        return [true, true, true, false, true, true, false];
      }
      
    case '3':
      {
        return [true, true, true, true, true, false, false];
      }
      
    case '4':
      {
        return [false, true, true, true, false, false, true];
    }
    case '5':
      {
        return [true, false, true, true, true, false, true];
      }
      
    case '6':
        return [true, false, true, true, true, true, true];
      
    case '7':
      {
        return [true, true, false, true, false, false, true];
      }
      
    case '8':
        return [true, true, true, true, true, true, true];
      
    case '9':
      {
        return [true, true, true, true, true, false, true];
      }
      
    default: {
      return [true, true, false, true, true, true, true];
    }
  }
}
