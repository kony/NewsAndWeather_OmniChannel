define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Image_hd8397261cea44a49cc757f7d56d1eda: function AS_Image_hd8397261cea44a49cc757f7d56d1eda(eventobject, x, y) {
        var self = this;
        this.closeWhenDone();
    },
    AS_FlexContainer_f9accb5dc3c543f99f2646226d613a45: function AS_FlexContainer_f9accb5dc3c543f99f2646226d613a45(eventobject) {
        var self = this;
        this.closeWhenDone();
    },
    AS_FlexContainer_cd6fe403c954465194dabf9189bb8597: function AS_FlexContainer_cd6fe403c954465194dabf9189bb8597(eventobject) {
        var self = this;
        this.onClickBack();
    },
    AS_Segment_j8b7147596804cb3bf1f47a8a5b280dd: function AS_Segment_j8b7147596804cb3bf1f47a8a5b280dd(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
    },
    AS_FlexContainer_hc2e58a0ade940d1af10a96e76d35621: function AS_FlexContainer_hc2e58a0ade940d1af10a96e76d35621(eventobject) {
        var self = this;
        // if(this.view.rchTextDesc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    AS_Button_a644c13a55464052b630dbb560db1766: function AS_Button_a644c13a55464052b630dbb560db1766(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    AS_FlexContainer_ef73ff146b1045f0b7c86f9310888b82: function AS_FlexContainer_ef73ff146b1045f0b7c86f9310888b82(eventobject) {
        var self = this;
        // if(this.view.lblCodeSnippet.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    AS_Button_bdf2e3dcfd524e0081242e2255aeb7ac: function AS_Button_bdf2e3dcfd524e0081242e2255aeb7ac(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    AS_FlexContainer_c144b3432a23424d80f02ade2dab5ef5: function AS_FlexContainer_c144b3432a23424d80f02ade2dab5ef5(eventobject) {
        var self = this;
        // if(this.view.rchtextDoc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    }
});