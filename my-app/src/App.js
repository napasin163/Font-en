import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css'


function CollapsibleExample() {
  return (
    <body>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://cdn.discordapp.com/attachments/768084656465117227/1022551852920885350/Focus.png"
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt="Miwa mew Face"
              />
              {' '}
              PM 2.5
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Dashboard</Nav.Link>
                <Nav.Link href="#pricing">Device</Nav.Link>
                <NavDropdown title="นึกอยู่ใส่อะไรดี" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">blank</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">blank</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">blank</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">blank</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">กินไก่</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">Embedded</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container style={{ padding: 10, marginTop: 0 }}>
          <br />
          <h5 style={{ textAlign: 'center' }}>
            <span className="font">ค่า AQI ของ PM2.5 วันนี้</span>
          </h5>
          <br />
          <Row>
            <Col md={2}>
              <Card style={{ padding: 0, width: '10rem', height: '20rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src="https://smartairfilters.com/wordpress/wp-content/uploads/2021/04/pm-circle-icon-150x150-light-blue.png"></Card.Img>
                  <br />
                  <Card.Title> Board 001</Card.Title>
                  <Card.Text>
                    <span className="font ">อุปกรณ์รหัส 001 ตั้งอยู่ที่บ้านฟร้อง ลาดกระบัง กทม</span></Card.Text>
                  <Card.Link href="device/001" target="_blank">
                    <Button variant="info"> ดูเพิ่มเติม</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{ padding: 0, width: '10rem', height: '20rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src="https://smartairfilters.com/wordpress/wp-content/uploads/2021/04/pm-circle-icon-150x150-light-blue.png"></Card.Img>
                  <br />
                  <Card.Title> Board 001</Card.Title>
                  <Card.Text>
                    <span className="font ">อุปกรณ์รหัส 001 ตั้งอยู่ที่บ้านฟร้อง ลาดกระบัง กทม</span></Card.Text>
                  <Card.Link href="device/001" target="_blank">
                    <Button variant="info"> ดูเพิ่มเติม</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{ padding: 0, width: '10rem', height: '20rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src="https://smartairfilters.com/wordpress/wp-content/uploads/2021/04/pm-circle-icon-150x150-light-blue.png"></Card.Img>
                  <br />
                  <Card.Title> Board 001</Card.Title>
                  <Card.Text>
                    <span className="font ">อุปกรณ์รหัส 001 ตั้งอยู่ที่บ้านฟร้อง ลาดกระบัง กทม</span></Card.Text>
                  <Card.Link href="device/001" target="_blank">
                    <Button variant="info"> ดูเพิ่มเติม</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{ padding: 0, width: '10rem', height: '20rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src="https://smartairfilters.com/wordpress/wp-content/uploads/2021/04/pm-circle-icon-150x150-light-blue.png"></Card.Img>
                  <br />
                  <Card.Title> Board 001</Card.Title>
                  <Card.Text>
                    <span className="font ">อุปกรณ์รหัส 001 ตั้งอยู่ที่บ้านฟร้อง ลาดกระบัง กทม</span></Card.Text>
                  <Card.Link href="device/001" target="_blank">
                    <Button variant="info"> ดูเพิ่มเติม</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{ padding: 0, width: '10rem', height: '20rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src="https://smartairfilters.com/wordpress/wp-content/uploads/2021/04/pm-circle-icon-150x150-light-blue.png"></Card.Img>
                  <br />
                  <Card.Title> Board 001</Card.Title>
                  <Card.Text>
                    <span className="font ">อุปกรณ์รหัส 001 ตั้งอยู่ที่บ้านฟร้อง ลาดกระบัง กทม</span></Card.Text>
                  <Card.Link href="device/001" target="_blank">
                    <Button variant="info"> ดูเพิ่มเติม</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{ padding: 0, width: '10rem', height: '20rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src="https://smartairfilters.com/wordpress/wp-content/uploads/2021/04/pm-circle-icon-150x150-light-blue.png"></Card.Img>
                  <br />
                  <Card.Title> Board 001</Card.Title>
                  <Card.Text>
                    <span className="font ">อุปกรณ์รหัส 001 ตั้งอยู่ที่บ้านฟร้อง ลาดกระบัง กทม</span></Card.Text>
                  <Card.Link href="device/001" target="_blank">
                    <Button variant="info"> ดูเพิ่มเติม</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </body>



  );
}

export default CollapsibleExample;