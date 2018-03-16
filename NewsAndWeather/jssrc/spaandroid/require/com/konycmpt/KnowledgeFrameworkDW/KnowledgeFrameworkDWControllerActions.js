define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Image_d320d00c85004d1bb1e06a8e56d810f0: function AS_Image_d320d00c85004d1bb1e06a8e56d810f0(eventobject, x, y) {
        var self = this;
        this.closeWhenDone();
    },
    AS_FlexContainer_j349e728f1ec4db68b5d155839e02d9a: function AS_FlexContainer_j349e728f1ec4db68b5d155839e02d9a(eventobject) {
        var self = this;
        this.closeWhenDone();
    },
    AS_FlexContainer_bcebdc170fde410b8ac13ec7ca37a509: function AS_FlexContainer_bcebdc170fde410b8ac13ec7ca37a509(eventobject) {
        var self = this;
        this.onClickBack();
    },
    AS_FlexContainer_d40d33aab67d4319bfcbe00231aff726: function AS_FlexContainer_d40d33aab67d4319bfcbe00231aff726(eventobject) {
        var self = this;
        // if(this.view.rchTextDesc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    AS_Button_ifc70f744faa4573b02b453683ce8fcf: function AS_Button_ifc70f744faa4573b02b453683ce8fcf(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    AS_FlexContainer_e9ec08ecba9e4a38a34e1f84788fad57: function AS_FlexContainer_e9ec08ecba9e4a38a34e1f84788fad57(eventobject) {
        var self = this;
        // if(this.view.lblCodeSnippet.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    AS_Button_c5b644cc89214b9b91e0ec4ae2c90260: function AS_Button_c5b644cc89214b9b91e0ec4ae2c90260(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    AS_FlexContainer_h3222d9aeccd4c388a760c960bc88189: function AS_FlexContainer_h3222d9aeccd4c388a760c960bc88189(eventobject) {
        var self = this;
        // if(this.view.rchtextDoc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    AS_Segment_ce4cc9572abe4dfc97fe8c0a08a08411: function AS_Segment_ce4cc9572abe4dfc97fe8c0a08a08411(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
    }
});