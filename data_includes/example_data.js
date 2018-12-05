var shuffleSequence = seq("consent","setcounter","intro");
//var practiceItemTypes = ["practice"];

var showProgressBar = false;
PennController.ResetPrefix(null);

var items = [

    ["setcounter", "__SetCounter__", { } ]
    ,    
 //   ["consent", "PennController", PennController(
 //       newHtml("consent", "ProlificConsent.html")
 //           .settings.log()
 //           .settings.css("max-width","40em")
 //           .print()
 //       ,
 //       newButton("consent btn", "Jag g&aring;r med p&aring; att delta i denna studie.")
 //           .print()
 //           .wait( getHtml("consent").test.complete().failure( getHtml("consent").warn() ) )
 //   )]
 //   ,
//    template
//    [["intro", 1], "Form", {
//        continueMessage: null,
//        html:  "<a id='link'> Click here to begin the experiment!</a>"+
//               "<script>document.getElementById('link').setAttribute('href', 'LINK TO EXPT 1 (without url-parameters; ends with experiment.html)?source='+PennController.GetURLParameter("source"));</script>"} ,
//              "__SendResults__", {
//      manualSendResults: true,      
//    }]
//    ,


// IS THIS WHAT I DO? And then just log PROLIFIC_PID also in the example_data of the individul files? And if it's empty it's ok?

    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicka h&auml;r f&ouml;r att g&aring; vidare!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_MCP_V2/experiment.html?source='+PennController.GetURLParameter('source')+'&id='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,    
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicka h&auml;r f&ouml;r att g&aring; vidare!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_MCP_SpAct/experiment.html?source='+PennController.GetURLParameter('source')+'&id='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,     
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicka h&auml;r f&ouml;r att g&aring; vidare!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_MCP_unm/experiment.html?source='+PennController.GetURLParameter('source')+'&id='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,     
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicka h&auml;r f&ouml;r att g&aring; vidare!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_DF_AHbel/experiment.html?source='+PennController.GetURLParameter('source')+'&id='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicka h&auml;r f&ouml;r att g&aring; vidare!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_DF_SpBel/experiment.html?source='+PennController.GetURLParameter('source')+'&id='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,      
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicka h&auml;r f&ouml;r att g&aring; vidare!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_DF_DiscFam/experiment.html?source='+PennController.GetURLParameter('source')+'&id='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
  
];