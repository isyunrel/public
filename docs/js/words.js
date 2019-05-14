((root, factory) => { root.words = new factory(); })(window, function() {

this.words = [



'theory|理论',
'analysis|分析',
'utilization|利用',
'evaluation|评测',
'purpose|目的',
'Synthesis|综合',
'prictice|实践',
'application|应用',
'Instructional|教学',
'comprehension|理解',
'resource|资源',
'material|材料',
'intenger|整数',
'integration|整合',
'demonstration|示范'



];

this.wordSplit = (str) => {
    return str.split('|');
}

});

console.log(words.words);