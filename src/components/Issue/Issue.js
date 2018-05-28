import React, { Component } from 'react';
import { Modal } from 'antd';
import Axios from 'axios';

import IssueForm from './IssueForm/IssueForm';
import usermeta from './../../utils/usermeta';
import classes from './Issue.css'


class Issue extends Component {
    issueBook = (units) => {
        let anIssue = {
            bkey: this.props.selectedBook.key,
            units: units
        }
        let noSuchBook;
        usermeta.getIssuedBooks()
            .then((data) => {
                if (data) {
                    noSuchBook = data.findIndex((el) => {
                        return el.bkey === anIssue.bkey
                    }) === -1;
                    if(noSuchBook) {
                        data.push(anIssue);
                    }
                    else {
                        Modal.info({
                            title: "Redundant issue prohibited.",
                            content: "you've already issued this book.",
                        });
                    }
                }
                if(!data || noSuchBook ) {
                    Axios.post('issues.json', {
                        ukey: this.props.user.key,
                        issued: noSuchBook?data:[anIssue]
                    })
                        .then(function (response) {
                            Modal.success({
                                title: 'Thansk for using our services.',
                                content: 'Our associate will reach you shortly.',
                            });
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            })
    }
    render() {
        return (
            <Modal
                title="Issue"
                visible={this.props.issueVisible}
                onCancel={this.props.issuepopupToggled}
                footer={null}
                className={classes.Issue_modal}
                okText="Confirm"
            >
                <IssueForm {...this.props} handleSubmit={this.issueBook} />
            </Modal>
        )
    }
}

export default Issue;