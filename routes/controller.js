// importing mongoose 
const express = require('express');
const { link } = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const nodemon = require('nodemon')

var router = express.Router();

// static files
const people = mongoose.model("Contact"); 

// routes

router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/contact_page.html'));
});

router.post('/contact/add',(req,res)=>{
    var Contact = new people();
    Contact.txtName = req.body.txtName;
    Contact.txtEmail = req.body.txtEmail;
    Contact.txtPhone = req.body.txtPhone;
    Contact.txtMsg = req.body.txtMsg;
    Contact.save((err , doc)=>{
        if(!err)
        {
            // res.redirect("/course/list");
            res.json({message : "sucseesfull", status : "0k"});
            console.log(doc)
        }
        else
        {
            res.send("err occurs");
        }
    });
});

router.get('/start-cource',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/start_cource.html'));
});

router.get('/start-cource/web-devlopment',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web_devlopment.html'));
});

// html01
router.get('/start-cource/web-devlopment/Introduction_of_html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/Introduction_of_html.html'));
});

// html02
router.get('/start-cource/web-devlopment/html_basic',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/html_basic.html'));
});

// html03
router.get('/start-cource/web-devlopment/Text_formatting',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/Text_formatting.html'));
});

// html04
router.get('/start-cource/web-devlopment/Abbreviation',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/Abbreviation.html'));
});

// html05
router.get('/start-cource/web-devlopment/Inserted_Deleted_or_Stricken',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/Inserted_Deleted_or_Stricken.html'));
});

// html06
router.get('/start-cource/web-devlopment/Superscript_and_Subscript',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/Superscript_and_Subscript.html'));
});

// html07
router.get('/start-cource/web-devlopment/Anchors_and_Hyperlinks',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/Anchors_and_Hyperlinks.html'));
});

// html08
router.get('/start-cource/web-devlopment/navigation_to_section_of_page',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/navigation_to_section_of_page.html'));
});

// html09
router.get('/start-cource/web-devlopment/orderd_lists',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/ordered_list.html'));
});

// html10
router.get('/start-cource/web-devlopment/unorderd_lists',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/unordered_list.html'));
});

// html11
router.get('/start-cource/web-devlopment/tables',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/tabel.html'));
});

// html12
router.get('/start-cource/web-devlopment/Comments',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/comments.html'));
});

// html13
router.get('/start-cource/web-devlopment/classes-and-Ids',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/classes-and-Ids.html'));
});

// html14
router.get('/start-cource/web-devlopment/Linking-script-and-css-stylesheet',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/Linking_css_and_javascript.html'));
});

// html15
router.get('/start-cource/web-devlopment/including_javascript_in_html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/Including_javascript.html'));
});

// html16
router.get('/start-cource/web-devlopment/including_css_in_html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/including-css.html'));
});

// html17
router.get('/start-cource/web-devlopment/inline_and_block_element',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/inline_and_block_element.html'));
});

// html18
router.get('/start-cource/web-devlopment/images-in-html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/image-tag.html'));
});

// html19
router.get('/start-cource/web-devlopment/form-in-html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/form.html'));
});

// html20
router.get('/start-cource/web-devlopment/input-tag-in-html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/Input_tag.html'));
});

// html21
router.get('/start-cource/web-devlopment/div-element-in-html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/div_tag.html'));
});

// html22
router.get('/start-cource/web-devlopment/section-element-in-html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/sectioning_element.html'));
});

// html23
router.get('/start-cource/web-devlopment/main-Footer-Section-element-in-html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/sectioning_element_2.html'));
});

// html24
router.get('/start-cource/web-devlopment/label-tag-in-html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/label_tag.html'));
});

// html25
router.get('/start-cource/web-devlopment/Media-audio-video-tag-in-html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/media.html'));
});

// html26
router.get('/start-cource/web-devlopment/html-layout',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/layout.html'));
});

// html27
router.get('/start-cource/web-devlopment/responsive-webdesign',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/responsive.html'));
});

// html28
router.get('/start-cource/web-devlopment/iframe-in-html',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/html-lecture/iframe.html'));
});



// css tutorial

// css1
router.get('/start-cource/web-devlopment/Introduction_of_css_and_how_it_is_embedded_in_html_file',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/css-lecture/introduction-to-css.html'));
});

// css2
router.get('/start-cource/web-devlopment/text-color-in-css',(req,res)=>{
    res.sendFile(path.join(__dirname+'/htmlfile/web-devlopment/css-lecture/text-color.html'));
});

module.exports = router;