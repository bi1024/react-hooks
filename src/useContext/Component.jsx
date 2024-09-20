import { useContext } from 'react'
import { TemplateContext } from './context'

const Component = () => {
  const text = useContext(TemplateContext);
  return (
    <div>{text}</div>
  )
}

export default Component