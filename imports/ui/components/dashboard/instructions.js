import {Instructions} from "../../../api/instructions/instructions";

import "./instructions.html";

Template.InstructionPanel.onCreated(function instructionPanelOnCreated() {
    this.autorun(() => {
        this.subscribe('instructions');
    });
});

Template.InstructionPanel.helpers({
    recentInstructions() {
        let now = new Date();
        let pastTime = moment(now).subtract(5, 'minutes').toDate();
        return Instructions.find(
            {
                'placedDate': {'$gt': pastTime}
            },
            { sort: {placedDate: -1 }}
        );
    },
});
