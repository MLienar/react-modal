# Simple React Modal

This is a simple react modal component that you can use in any project.
The modal adds itself to the DOM as a fixed position element so you can add it to any component on your app.

## Installation

To install the simple-react-modal-oc, simply run the following command :

```sh
npm install simple-react-modal-oc
```

Afterwards,, you can import it into any react component like so : 

```sh
import Modal from "simple-react-modal-oc"
```

## Usage

### Toggle modal
Use any method you like to toggle the modal's visibility. One easy way is to use react's useState hook like so : 

```sh
const [modal, showModal] = useState(false)
return(
    ...
    { modal ? 
    (<Modal>
        [...]
    </Modal>) : null
    }
    <Button onClick={showModal(true)} />
```

### Modal children
Think of this component as a headless modal : it doesn't display any content on its own. You can add any component inside the <Modal> tags to display them when the modal pops-up.

### Customize the component
You can change the color of the modal's close button by passing an optional color strings as a prop : 

```sh
<Modal color="beautiful-color"
```

Any color that works in CSS will work if you pass it as a string.