import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";

const Club = () => {
    const [teams, setTeams] = useState("");
    const [allTeams, setAllTeams] = useState([]);

    const handleChange = (e) => {
        const searchText = e.target.value;
        setTeams(searchText);
    };

    useEffect(() => {
        fetch(
            `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teams}`
        )
            .then((res) => res.json())
            .then((data) => setAllTeams(data?.teams));
    }, [teams]);

    return (
        <div className="bg-info">
            <MenuBar />
            <div>
                <h1 className='text-white'>Find your favourite club</h1>
            </div>
            <div>
                <input
                    className="w-75 p-2 my-4 rounded border-0"
                    onChange={handleChange}
                    type="text"
                    placeholder="Find your favourite club"
                />
            </div>
            <div className="club container-fluid">
                <Row xs={1} md={3} lg={4} className="g-4">
                    {allTeams.map((team) => (
                        <Col>
                            <Card style={{height: '100%'}}>
                                <Card.Img
                                    variant="top"
                                    className='p-4'
                                    src={team.strTeamBadge}
                                />
                                <Card.Body>
                                    <Card.Title>{team.strTeam}</Card.Title>
                                    <Card.Text>
                                        <p>{team.strAlternate}</p>
                                        <p>League: {team.strLeague}</p>
                                        <p>country: {team.strCountry}</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`/details/${team.idTeam}`}>
                                        <button className="btn btn-info fw-bold w-100 my-2 py-2">
                                            See Details
                                        </button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Club;
