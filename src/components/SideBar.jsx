import React from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap'

function SideBar() {


    return (
        <aside className="border p-3">
            <div>
                <p><strong>SEARCH BY NAME</strong></p>
                <InputGroup className="mb-3">
                    <FormControl
                        className="mx-1"
                        placeholder="Enter Hotel Name"
                        aria-label="Enter Hotel Name"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="success" id="button-addon2">
                        SEARCH
                    </Button>
                </InputGroup>
            </div>


            <div>
                <p><strong>FILTER BY ROOMS</strong></p>
                <InputGroup className="mb-3">
                    <FormControl
                        className="mx-1"
                        placeholder="Enter No Of Rooms"
                        aria-label="Enter No Of Rooms"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="success" id="button-addon2">
                        SEARCH
                    </Button>
                </InputGroup>
            </div>
            <div>
                <p><strong>FILTER BY PRICE</strong></p>
                <InputGroup className="mb-3">
                    <FormControl
                        className="mx-1"
                        placeholder="min"
                        aria-label="Enter Hotel Name"
                        aria-describedby="basic-addon2"
                    />
                    <FormControl
                        className="mx-1"
                        placeholder="max"
                        aria-label="Enter Hotel Name"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="success" id="button-addon2">
                        FILTER
                    </Button>
                </InputGroup>
            </div>

        </aside>
    )
}

export default SideBar
