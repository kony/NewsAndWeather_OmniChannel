define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for btnClose **/
    AS_Image_d320d00c85004d1bb1e06a8e56d810f0: function AS_Image_d320d00c85004d1bb1e06a8e56d810f0(eventobject, x, y) {
        var self = this;
        this.closeWhenDone();
    },
    /** onClick defined for flexCloseClick **/
    AS_FlexContainer_jf582ae16db246a8aa7078364c207959: function AS_FlexContainer_jf582ae16db246a8aa7078364c207959(eventobject) {
        var self = this;
        this.closeWhenDone();
    },
    /** onClick defined for flexClickBack **/
    AS_FlexContainer_eb36dc9d1d454a4db5a8ee39a0e85b9b: function AS_FlexContainer_eb36dc9d1d454a4db5a8ee39a0e85b9b(eventobject) {
        var self = this;
        this.onClickBack();
    },
    /** onRowClick defined for sgmtAPI **/
    AS_Segment_d3e09723a5254b45ac9431b7e4bdbb06: function AS_Segment_d3e09723a5254b45ac9431b7e4bdbb06(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
    },
    /** onClick defined for flexAcc1 **/
    AS_FlexContainer_e007ca5e942e474fa13735d61e8be717: function AS_FlexContainer_e007ca5e942e474fa13735d61e8be717(eventobject) {
        var self = this;
        // if(this.view.rchTextDesc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    /** onClick defined for btnPlay1 **/
    AS_Button_d35edc11a27e42b28e76d53809c6daf7: function AS_Button_d35edc11a27e42b28e76d53809c6daf7(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    /** onClick defined for flexAcc2 **/
    AS_FlexContainer_c048300a3ec34ffd93bc4493926ec85e: function AS_FlexContainer_c048300a3ec34ffd93bc4493926ec85e(eventobject) {
        var self = this;
        // if(this.view.lblCodeSnippet.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    /** onClick defined for btnPlay2 **/
    AS_Button_jf7ec43e72814d60aadf22cdef2aa6b6: function AS_Button_jf7ec43e72814d60aadf22cdef2aa6b6(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    /** onClick defined for flexAcc3 **/
    AS_FlexContainer_abbbd3c02ea345acae74375d13194554: function AS_FlexContainer_abbbd3c02ea345acae74375d13194554(eventobject) {
        var self = this;
        // if(this.view.rchtextDoc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    }
});