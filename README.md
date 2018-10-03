# confirm
Replacement of confirm function with react-bootstrap.

## Usage

```js
import confirm from 'react-confirm2';

confirm('Are you sure?', () => {
  console.log('yes');
});
```

## Other examples:

### Basic restyling

```js
confirm('Are you sure?', {
  confirmLabel: 'Im sure!!!',
    description:(
      <div>
        Please make sure you are sure.
       </div>
    ),
    done: () => console.log('confirmed')
})
```         
         
        
