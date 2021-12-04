import React from 'react';
import './style.scss';
import { Container, Button, Accordion, Row } from 'react-bootstrap';


const Filter = () => {
    return (
        <>
            <Container className="d-flex flex-column container-filter">
                <Accordion>
                    <Accordion.Header>
                        <svg width="92" height="41" viewBox="0 0 92 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10C0 4.47715 4.47715 0 10 0H82C87.5229 0 92 4.47715 92 10V31C92 36.5228 87.5229 41 82 41H10C4.47715 41 0 36.5228 0 31V10Z" fill="#F6F6F6" />
                            <path d="M18.3333 28V22.1667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.3333 18.8333V13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25 28V20.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25 17.1667V13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M31.6667 28V23.8333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M31.6667 20.5V13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.8333 22.1667H20.8333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.5 17.1667H27.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M29.1667 23.8333H34.1667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M44.036 25.5V15.7H50V16.666H45.212V20.11H49.286V21.062H45.212V25.5H44.036ZM52.3585 17.016C52.1252 17.016 51.9292 16.9413 51.7705 16.792C51.6212 16.6333 51.5465 16.4373 51.5465 16.204C51.5465 15.98 51.6212 15.7933 51.7705 15.644C51.9292 15.4947 52.1252 15.42 52.3585 15.42C52.5825 15.42 52.7738 15.4947 52.9325 15.644C53.0912 15.7933 53.1705 15.98 53.1705 16.204C53.1705 16.4373 53.0912 16.6333 52.9325 16.792C52.7738 16.9413 52.5825 17.016 52.3585 17.016ZM51.7705 25.5V18.556H52.9465V25.5H51.7705ZM55.1941 25.5V15.42H56.3701V25.5H55.1941ZM61.2416 25.5C60.607 25.5 60.1076 25.346 59.7436 25.038C59.3796 24.73 59.1976 24.1747 59.1976 23.372V19.55H57.9936V18.556H59.1976L59.3516 16.89H60.3736V18.556H62.4176V19.55H60.3736V23.372C60.3736 23.8107 60.4623 24.1093 60.6396 24.268C60.817 24.4173 61.1296 24.492 61.5776 24.492H62.3056V25.5H61.2416ZM67.0423 25.668C66.3796 25.668 65.7916 25.5187 65.2783 25.22C64.765 24.912 64.359 24.4873 64.0603 23.946C63.771 23.4047 63.6263 22.7653 63.6263 22.028C63.6263 21.3 63.771 20.6653 64.0603 20.124C64.3496 19.5733 64.751 19.1487 65.2643 18.85C65.787 18.542 66.389 18.388 67.0703 18.388C67.7423 18.388 68.321 18.542 68.8063 18.85C69.301 19.1487 69.679 19.5453 69.9403 20.04C70.2016 20.5347 70.3323 21.0667 70.3323 21.636C70.3323 21.7387 70.3276 21.8413 70.3183 21.944C70.3183 22.0467 70.3183 22.1633 70.3183 22.294H64.7883C64.8163 22.826 64.9376 23.2693 65.1523 23.624C65.3763 23.9693 65.6516 24.2307 65.9783 24.408C66.3143 24.5853 66.669 24.674 67.0423 24.674C67.5276 24.674 67.9336 24.562 68.2603 24.338C68.587 24.114 68.825 23.8107 68.9743 23.428H70.1363C69.9496 24.072 69.5903 24.6087 69.0583 25.038C68.5356 25.458 67.8636 25.668 67.0423 25.668ZM67.0423 19.382C66.4823 19.382 65.983 19.5547 65.5443 19.9C65.115 20.236 64.8676 20.7307 64.8023 21.384H69.1703C69.1423 20.7587 68.9276 20.2687 68.5263 19.914C68.125 19.5593 67.6303 19.382 67.0423 19.382ZM72.091 25.5V18.556H73.155L73.253 19.886C73.4677 19.4287 73.7943 19.0647 74.233 18.794C74.6717 18.5233 75.213 18.388 75.857 18.388V19.62H75.535C75.1243 19.62 74.7463 19.6947 74.401 19.844C74.0557 19.984 73.7803 20.2267 73.575 20.572C73.3697 20.9173 73.267 21.3933 73.267 22V25.5H72.091Z" fill="black" />
                            <path d="M10 1H82V-1H10V1ZM91 10V31H93V10H91ZM82 40H10V42H82V40ZM1 31V10H-1V31H1ZM10 40C5.02944 40 1 35.9706 1 31H-1C-1 37.0751 3.92487 42 10 42V40ZM91 31C91 35.9706 86.9706 40 82 40V42C88.0751 42 93 37.0751 93 31H91ZM82 1C86.9706 1 91 5.02944 91 10H93C93 3.92487 88.0751 -1 82 -1V1ZM10 -1C3.92487 -1 -1 3.92487 -1 10H1C1 5.02944 5.02944 1 10 1V-1Z" fill="#BABABA" />
                        </svg>
                    </Accordion.Header>
                    <Accordion.Body className="d-flex flex-column gap-2">
                        <h5>Category</h5>
                        <Container className="d-flex gap-4 flex-wrap p-0">
                            <Button className="buttons-categories" variant="primary" size="md">Headphone</Button>
                            <Button className="buttons-categories">Mouses</Button>
                            <Button className="buttons-categories">Monitores</Button>
                            <Button className="buttons-categories">Hardware</Button>
                        </Container>
                        <h5>Sort by</h5>
                        <Container className="d-flex gap-4 flex-wrap p-0">
                            <Button className="buttons-categories">Newest</Button>
                            <Button className="buttons-categories">Oldest</Button>
                        </Container >
                        <Container className="d-flex align-items-center justify-content-center my-4 mx-0 p-0">
                            <Button size="lg" className="buttons-categories apply p-2">Apply Filters</Button>
                        </Container>
                    </Accordion.Body>
                </Accordion>
            </Container>
        </>
    );
}

export default Filter;