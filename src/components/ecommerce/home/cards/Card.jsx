import Card from 'react-bootstrap/Card';


function CardItem ({title, linkText, body }) {
    return (
        <Card style={{ width: '18rem' }} className=' py-[10px] px-[7px] max-w-[319px] max-h-[472px] flex justify-center'>
            <Card.Title className=' mb-[-2px] font-bold ml-[7px]'>{title}</Card.Title>
            <Card.Body className='flex flex-wrap gap-2'>
                    {body}
            </Card.Body>
            <Card.Link href="#" className='text-[#5babb8] ml-[7px]'>{linkText}</Card.Link>
        </Card>
    )
}

export default CardItem;