import t from"../algorithms/luhn";export default function e(){return{validate(e){if(e.value===""){return{valid:true}}let r=e.value;switch(true){case/^[0-9A-F]{15}$/i.test(r):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(r):case/^\d{19}$/.test(r):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(r):const e=r.charAt(r.length-1).toUpperCase();r=r.replace(/[- ]/g,"");if(r.match(/^\d*$/i)){return{valid:t(r)}}r=r.slice(0,-1);let a="";let s;for(s=1;s<=13;s+=2){a+=(parseInt(r.charAt(s),16)*2).toString(16)}let l=0;for(s=0;s<a.length;s++){l+=parseInt(a.charAt(s),16)}return{valid:l%10===0?e==="0":e===((Math.floor((l+10)/10)*10-l)*2).toString(16).toUpperCase()};case/^[0-9A-F]{14}$/i.test(r):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(r):case/^\d{18}$/.test(r):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(r):return{valid:true};default:return{valid:false}}}}}