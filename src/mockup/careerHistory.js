import React from 'react';
import Moment from 'react-moment';

import { CareerHistory as history } from './data-points';

import { Card, CardContent, Typography } from '@material-ui/core';

const CareerHistory = () => {

    const content = history.map((post) =>
        //TODO Moment time from is not working below
        //TODO Moment is creating invalid start and end date
        //TODO How to iterate over the array inside an obkect e.g. example sites inside of companies



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
        <div>
            Career History
            {content}

        </div>

    )
};

export default CareerHistory;