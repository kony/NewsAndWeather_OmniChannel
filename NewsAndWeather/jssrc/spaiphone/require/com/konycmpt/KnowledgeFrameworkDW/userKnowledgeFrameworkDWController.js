define(function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        previosAcc: null,
        isClosed: false,
        setData: function(data) {
            this.view.lblHeading.text = "Key Features";
            this.view.sgmtApi.removeAll();
            this.view.sgmtApi.isVisible = true;
            this.view.sgmtApi.widgetDataMap = {
                "lblNameOfAPI": "title"
            };
            this.view.sgmtApi.setData(data);
        },
        onRowClick: function() {
            this.showAccord("flexAcc1");
            var data = this.view.sgmtApi.selectedItems[0];
            this.animateDescriptionScreen(0, data.title);
            this.populateData(data);
        },
        setUIAfterAnimation: function(left, headerText) {
            if (left === 100) {
                this.view.flexClickBack.setVisibility(false);
                this.view.lblHeading.text = "Key Features";
            } else {
                this.view.flexClickBack.setVisibility(true);
                this.view.lblHeading.text = headerText;
            }
            if (this.isClosed) {
                this.navigateToPreviousScreen();
                this.isClosed = false;
            }
        },
        animateDescriptionScreen: function(left, headerText) {
            var controllerScope = this;
            controllerScope.view.flxFullScreen.animate(kony.ui.createAnimation({
                100: {
                    left: left + "%",
                    "stepConfig": {}
                }
            }), {
                delay: 0,
                fillMode: kony.anim.FILL_MODE_FORWARDS,
                duration: 0.1
            }, {
                animationEnd: function() {
                    if (left === 0) {
                        controllerScope.view.flexClickBack.setVisibility(true);
                        controllerScope.view.lblHeading.text = headerText;
                    } else {
                        controllerScope.view.flexClickBack.setVisibility(false);
                        controllerScope.view.lblHeading.text = "Key Features";
                    }
                    //controllerScope.setUIAfterAnimation(left, headerText);
                }
            });
        },
        populateData: function(data) {
            this.view.rchDesc1.text = data.desc1;
            this.view.rchDesc2.text = data.desc2;
            if (data.video1 !== undefined && data.video1 !== null) {
                this.view.imgVideoView1.src = data.image1;
                this.view.vid1.source = data.video1;
            } else {
                kony.print("Video1 Not Available");
                this.view.flexImageVideo.isVisible = false;
            }
            if (data.video2 !== undefined && data.video2 !== null) {
                this.view.imageVideo2.src = data.image2;
            } else {
                kony.print("Video2 Not Available");
                this.view.flexImageVideo2.isVisible = false;
            }
            this.view.rchDesc3.text = data.link;
        },
        showAccord: function(id) {
            id = id.split("flexAcc")[1];
            if (this.previosAcc !== null && this.previosAcc !== id) {
                this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
                this.view["flexScrollDesc" + id].isVisible = true;
                this.view["lblTitleAcc" + id].skin = "sknlblAccBold";
                this.view["lblTitleAcc" + this.previosAcc].skin = "sknlblAccNormal";
                this.previosAcc = id;
            } else if (this.previosAcc == id) {
                if (this.view["btnAccordian" + id].src == "chevrondown.png") {
                    this.view["btnAccordian" + this.previosAcc].src = "chevrondown.png";
                    this.view["btnAccordian" + id].src = "chevron.png";
                    this.view["flexScrollDesc" + this.previosAcc].isVisible = true;
                    this.view["flexScrollDesc" + id].isVisible = false;
                    this.view["lblTitleAcc" + id].skin = "sknlblAccNormal";
                    this.previosAcc = id;
                } else {
                    this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                    this.view["btnAccordian" + id].src = "chevrondown.png";
                    this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
                    this.view["flexScrollDesc" + id].isVisible = true;
                    this.view["lblTitleAcc" + id].skin = "sknlblAccBold";
                    this.previosAcc = id;
                }
            } else {
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblTitleAcc" + id].skin = "sknlblAccBold";
                this.view["flexScrollDesc" + id].isVisible = true;
                this.previosAcc = id;
            }
        },
        closeWhenDone: function() {
            this.isClosed = true;
            this.animateDescriptionScreen(100, "Key Features");
            this.setUIAfterAnimation(100, "Key Features");
        },
        navigateToPreviousScreen: function() {
            var prevForm = kony.application.getPreviousForm();
            var navObj = new kony.mvc.Navigation("frmNewsAndWeather");
            navObj.navigate();
        },
        onClickBack: function() {
            this.resetDescScreen();
            this.animateDescriptionScreen(100, "Key Features");
        },
        resetDescScreen: function() {
            for (i = 1; i <= 3; i++) {
                this.view["lblTitleAcc" + i].skin = "sknlblAccNormal";
                this.view["btnAccordian" + i].src = "chevron.png";
                this.view["flexScrollDesc" + i].isVisible = false;
            }
        },
        onClickPlayButton: function(id) {
            id = id.split("btnPlay")[1];
            var url = this.view.sgmtApi.selectedItems[0]["video" + id];
            kony.application.openURL(url);
        },
        onLinkClick: function() {
            kony.application.openURL(this.view.sgmtAPI.selectedItems[0].link);
        }
    };
});