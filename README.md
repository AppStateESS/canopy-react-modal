# @essappstate/canopy-react-modal
Creates a Bootstrap modal overlay
Works with AppStateESS/Canopy.

## Install
```
npm install --save-dev @essappstate/canopy-react-modal
``` 

## Properties

|Prop name|Type|Description|
|----|----|----|
|onClose|function|Function to call on close of modal|
|body|string|Content for modal body|
|modalId|string|Id attribute of modal. Default is reactModal|
|header|string|Title of modal|
|footer|string|Content to place in footer. Will be followed by the close button|


## Example
```
<button 
    className="btn btn-outline-dark" 
    data-toggle="modal" 
    data-target="#reactModal">
        Open modal
</button>
<Modal body={<p>test</p>}/>
```
