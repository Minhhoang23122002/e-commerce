
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/inputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton,
        bordered, backgroundColorInput = 'white',
        backgroundColorButton = 'rgb(13,92,182)',
        colorButton = 'white'
    } = props
    return (
        <div style={{ display: 'flex' }}>
            <InputComponent 
                size={size} 
                placeholder={placeholder}
                style={{ backgroundColor: backgroundColorInput }} />
            <ButtonComponent 
                size={size} 
                styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined color={colorButton} style={{ color:'white'}} />}
                textButton={textButton}
                styleTextButton={{color: colorButton}}
            />
        </div>
    )
}

export default ButtonInputSearch