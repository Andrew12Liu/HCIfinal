import ReacC from 'react'
import { Col, Container, Form , Row} from 'react-bootstrap'
import checks from './filing.json'


export default function Filing() {
console.log(checks[0])    

  return (
      <Container className = 'box'>
          <h1> Insider Title </h1>
          <Row>
          <Col > 
          <Form> 
            
    {checks.first.map(type => 
 (
      <div key={`${type.title}`}>
        <Form.Check 
          type={'checkbox'}
          id={type.title}
          label={type.title}
        />
  {console.log(type)}
      </div>
    ))}
  </Form>
  </Col>
  <Col>
  <Form> 
    {checks.second.map(type => 
 (
      <div key={`${type.title}`}>
        <Form.Check 
          type={'checkbox'}
          id={type.title}
          label={type.title}
        />
  {console.log(type)}
      </div>
    ))}
  </Form>
  </Col>
  <Col>
  <Form> 
    {checks.third.map(type => 
 (
      <div key={`${type.title}`}>
        <Form.Check 
          type={'checkbox'}
          id={type.title}
          label={type.title}
        />
  {console.log(type)}
      </div>
    ))}
  </Form>
  </Col>
  
    
    
  
</Row>
    </Container>
  )
}
