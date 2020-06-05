import React from 'react';
import Moment from 'react-moment';

import { CareerHistory as history } from './data-points';

import { Card, CardContent, Typography } from '@material-ui/core';

const CareerHistory = () => {

    //FIXME Reverse().map is constanly reversing the order each time you load the page.
    const content = history.reverse().map((post) =>

        < Card key={post.id} >

            <p>{post.companyName}</p>
            <ul>
                <li>Role: {post.role}</li>
                <li >Time at role: <Moment from={post.startDate}>{post.endDate}</Moment>  </li>
                <li>Started: <Moment format="DD MM YYYY">{post.startDate}</Moment></li>
                <li>Ended: <Moment format="DD MM YYYY">{post.endDate}</Moment></li>
                {post.delmeAchievments ? <li>{post.delmeAchievments}</li> : ''}
                {post.agileSkills ? <ul>{post.agileSkills.map(agileSkill => (<li>{agileSkill}</li>))}</ul> : ''}
                {post.skills ? <ul>{post.skills.map(skill => (<li>{skill}</li>))}</ul> : ''}

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.description ? post.description : ''}
                    </Typography>
                </CardContent>



                {post.exampleSites ? <ul>{post.exampleSites.map(exampleSite => (<li>{exampleSite}</li>))}</ul> : ''}
                {post.respnsibilitiesAndDuties ? <li>{post.respnsibilitiesAndDuties}</li> : ''}
                {post.clientsWorkedWith ? <ul>{post.clientsWorkedWith.map(client => (<li>{client}</li>))}</ul> : ''}
            </ul>
        </Card >
    );


    return (
        <>
            <h1>Employment History</h1>
            {content}

        </>

    )
};

export default CareerHistory;