import Card from 'react-bootstrap/Card';

export default function Home () {
    return(
        <Card style={{ width: '70vw', margin: '50px auto' }} border="dark">
            <Card.Body>
                <Card.Text>
                Visit our resort and change your life!
                </Card.Text>
                <Card.Text>
                Grand opening in StressVille, Texas
                </Card.Text>
                <Card.Text>
                Check out our wide array of packages and offers!
                </Card.Text>
            </Card.Body>
        </Card>
    )

}