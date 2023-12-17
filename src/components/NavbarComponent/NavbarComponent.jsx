import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextValue } from './style'
import Checkbox from 'antd/es/checkbox/Checkbox'
import { Rate } from 'antd'


const NavbarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{marginLeft: 0}} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
                case 'star':
                    return options.map((option)=> {
                        return (
                           <div style={{ display: 'flex'}}>
                            <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                            <span>{`từ ${option} sao`}</span>
                           </div>
                        )
                    })
                    case 'price':
                        return options.map((option)=> {
                            return (
                               <div style={{padding: '4px', color: 'rgb(56, 56, 61)', borderRadius: '10px', backgroundColor: '#ccc', width: 'fit-content'}}>{option}</div>
                            )
                        })
                
            default:
                return {}
        }
    }
    return (
        <div>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Iphone', 'Android', 'Oppo'])}
            </WrapperContent>
            {/* <WrapperContent>
            {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' }
            ])}
            </WrapperContent>
            <WrapperContent>
                    {renderContent('star', [3, 4, 5])}
            </WrapperContent>
            <WrapperContent>
                    {renderContent('price', ['Dưới 2.000.000', '2.000.000-23.000.000', 'Trên 23.000.000'])}
            </WrapperContent> */}
            
        </div>
    )
}

export default NavbarComponent