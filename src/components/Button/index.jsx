import styles from './Button.module.css'

const Button = ({children, width, height}) => {
  if(!width){
    width = "100%"
  }
  const inlineStyle = {
    width: `${width}`,
  }
  if (height){
    inlineStyle.height = height
  }
  // let widthDefault = ""
  return (
    <button className={`${styles.button} rounded`} style={inlineStyle}> {children}</button>
  )
}

export default Button