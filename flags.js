const localFlags = [
  { name: "Andorra", src: "flags/ad.png" },
  { name: "United Arab Emirates", src: "flags/ae.png" },
  { name: "Afghanistan", src: "flags/af.png" },
  { name: "Antigua and Barbuda", src: "flags/ag.png" },
  { name: "Anguilla", src: "flags/ai.png" },
  { name: "Albania", src: "flags/al.png" },
  { name: "Armenia", src: "flags/am.png" },
  { name: "Angola", src: "flags/ao.png" },
  { name: "Antarctica", src: "flags/aq.png" },
  { name: "Argentina", src: "flags/ar.png" },
  { name: "American Samoa", src: "flags/as.png" },
  { name: "Austria", src: "flags/at.png" },
  { name: "Australia", src: "flags/au.png" },
  { name: "Aruba", src: "flags/aw.png" },
  { name: "Åland Islands", src: "flags/ax.png" },
  { name: "Azerbaijan", src: "flags/az.png" },
  { name: "Bosnia and Herzegovina", src: "flags/ba.png" },
  { name: "Barbados", src: "flags/bb.png" },
  { name: "Bangladesh", src: "flags/bd.png" },
  { name: "Belgium", src: "flags/be.png" },
  { name: "Burkina Faso", src: "flags/bf.png" },
  { name: "Bulgaria", src: "flags/bg.png" },
  { name: "Bahrain", src: "flags/bh.png" },
  { name: "Burundi", src: "flags/bi.png" },
  { name: "Benin", src: "flags/bj.png" },
  { name: "Saint Barthélemy", src: "flags/bl.png" },
  { name: "Bermuda", src: "flags/bm.png" },
  { name: "Brunei", src: "flags/bn.png" },
  { name: "Bolivia", src: "flags/bo.png" },
  { name: "Bonaire", src: "flags/bq.png" },
  { name: "Brazil", src: "flags/br.png" },
  { name: "Bahamas", src: "flags/bs.png" },
  { name: "Bhutan", src: "flags/bt.png" },
  { name: "Bouvet Island", src: "flags/bv.png" },
  { name: "Botswana", src: "flags/bw.png" },
  { name: "Belarus", src: "flags/by.png" },
  { name: "Belize", src: "flags/bz.png" },
  { name: "Canada", src: "flags/ca.png" },
  { name: "Cocos (Keeling) Islands", src: "flags/cc.png" },
  { name: "Congo (DRC)", src: "flags/cd.png" },
  { name: "Central African Republic", src: "flags/cf.png" },
  { name: "Congo (Republic)", src: "flags/cg.png" },
  { name: "Switzerland", src: "flags/ch.png" },
  { name: "Côte d'Ivoire", src: "flags/ci.png" },
  { name: "Cook Islands", src: "flags/ck.png" },
  { name: "Chile", src: "flags/cl.png" },
  { name: "Cameroon", src: "flags/cm.png" },
  { name: "China", src: "flags/cn.png" },
  { name: "Colombia", src: "flags/co.png" },
  { name: "Costa Rica", src: "flags/cr.png" },
  { name: "Cuba", src: "flags/cu.png" },
  { name: "Cape Verde", src: "flags/cv.png" },
  { name: "Curaçao", src: "flags/cw.png" },
  { name: "Christmas Island", src: "flags/cx.png" },
  { name: "Cyprus", src: "flags/cy.png" },
  { name: "Czech Republic", src: "flags/cz.png" },
  { name: "Germany", src: "flags/de.png" },
  { name: "Djibouti", src: "flags/dj.png" },
  { name: "Denmark", src: "flags/dk.png" },
  { name: "Dominica", src: "flags/dm.png" },
  { name: "Dominican Republic", src: "flags/do.png" },
  { name: "Algeria", src: "flags/dz.png" },
  { name: "Ecuador", src: "flags/ec.png" },
  { name: "Estonia", src: "flags/ee.png" },
  { name: "Egypt", src: "flags/eg.png" },
  { name: "Western Sahara", src: "flags/eh.png" },
  { name: "Eritrea", src: "flags/er.png" },
  { name: "Spain", src: "flags/es.png" },
  { name: "Ethiopia", src: "flags/et.png" },
  { name: "European Union", src: "flags/eu.png" },
  { name: "Finland", src: "flags/fi.png" },
  { name: "Fiji", src: "flags/fj.png" },
  { name: "Falkland Islands", src: "flags/fk.png" },
  { name: "Micronesia", src: "flags/fm.png" },
  { name: "Faroe Islands", src: "flags/fo.png" },
  { name: "France", src: "flags/fr.png" },
  { name: "Gabon", src: "flags/ga.png" },
  { name: "United Kingdom (England)", src: "flags/gb-eng.png" },
  { name: "United Kingdom (Northern Ireland)", src: "flags/gb-nir.png" },
  { name: "United Kingdom (Scotland)", src: "flags/gb-sct.png" },
  { name: "United Kingdom (Wales)", src: "flags/gb-wls.png" },
  { name: "United Kingdom", src: "flags/gb.png" },
  { name: "Grenada", src: "flags/gd.png" },
  { name: "Georgia", src: "flags/ge.png" },
  { name: "French Guiana", src: "flags/gf.png" },
  { name: "Guernsey", src: "flags/gg.png" },
  { name: "Ghana", src: "flags/gh.png" },
  { name: "Gibraltar", src: "flags/gi.png" },
  { name: "Greenland", src: "flags/gl.png" },
  { name: "Gambia", src: "flags/gm.png" },
  { name: "Guinea", src: "flags/gn.png" },
  { name: "Guadeloupe", src: "flags/gp.png" },
  { name: "Equatorial Guinea", src: "flags/gq.png" },
  { name: "Greece", src: "flags/gr.png" },
  { name: "South Georgia & South Sandwich Islands", src: "flags/gs.png" },
  { name: "Guatemala", src: "flags/gt.png" },
  { name: "Guam", src: "flags/gu.png" },
  { name: "Guinea-Bissau", src: "flags/gw.png" },
  { name: "Guyana", src: "flags/gy.png" },
  { name: "Hong Kong", src: "flags/hk.png" },
  { name: "Heard & McDonald Islands", src: "flags/hm.png" },
  { name: "Honduras", src: "flags/hn.png" },
  { name: "Croatia", src: "flags/hr.png" },
  { name: "Haiti", src: "flags/ht.png" },
  { name: "Hungary", src: "flags/hu.png" },
  { name: "Indonesia", src: "flags/id.png" },
  { name: "Ireland", src: "flags/ie.png" },
  { name: "Israel", src: "flags/il.png" },
  { name: "Isle of Man", src: "flags/im.png" },
  { name: "India", src: "flags/in.png" },
  { name: "British Indian Ocean Territory", src: "flags/io.png" },
  { name: "Iraq", src: "flags/iq.png" },
  { name: "Iran", src: "flags/ir.png" },
  { name: "Iceland", src: "flags/is.png" },
  { name: "Italy", src: "flags/it.png" },
  { name: "Jersey", src: "flags/je.png" },
  { name: "Jamaica", src: "flags/jm.png" },
  { name: "Jordan", src: "flags/jo.png" },
  { name: "Japan", src: "flags/jp.png" },
  { name: "Kenya", src: "flags/ke.png" },
  { name: "Kyrgyzstan", src: "flags/kg.png" },
  { name: "Cambodia", src: "flags/kh.png" },
  { name: "Kiribati", src: "flags/ki.png" },
  { name: "Comoros", src: "flags/km.png" },
  { name: "North Korea", src: "flags/kp.png" },
  { name: "South Korea", src: "flags/kr.png" },
  { name: "Kuwait", src: "flags/kw.png" },
  { name: "Cayman Islands", src: "flags/ky.png" },
  { name: "Kazakhstan", src: "flags/kz.png" },
  { name: "Laos", src: "flags/la.png" },
  { name: "Lebanon", src: "flags/lb.png" },
  { name: "Saint Lucia", src: "flags/lc.png" },
  { name: "Liechtenstein", src: "flags/li.png" },
  { name: "Sri Lanka", src: "flags/lk.png" },
  { name: "Liberia", src: "flags/lr.png" },
  { name: "Lesotho", src: "flags/ls.png" },
  { name: "Lithuania", src: "flags/lt.png" },
  { name: "Luxembourg", src: "flags/lu.png" },
  { name: "Latvia", src: "flags/lv.png" },
  { name: "Libya", src: "flags/ly.png" },
  { name: "Morocco", src: "flags/ma.png" },
  { name: "Monaco", src: "flags/mc.png" },
  { name: "Moldova", src: "flags/md.png" },
  { name: "Montenegro", src: "flags/me.png" },
  { name: "Saint Martin", src: "flags/mf.png" },
  { name: "Madagascar", src: "flags/mg.png" },
  { name: "Marshall Islands", src: "flags/mh.png" },
  { name: "North Macedonia", src: "flags/mk.png" },
  { name: "Mali", src: "flags/ml.png" },
  { name: "Myanmar (Burma)", src: "flags/mm.png" },
  { name: "Mongolia", src: "flags/mn.png" },
  { name: "Macau", src: "flags/mo.png" },
  { name: "Northern Mariana Islands", src: "flags/mp.png" },
  { name: "Martinique", src: "flags/mq.png" },
  { name: "Mauritania", src: "flags/mr.png" },
  { name: "Montserrat", src: "flags/ms.png" },
  { name: "Malta", src: "flags/mt.png" },
  { name: "Mauritius", src: "flags/mu.png" },
  { name: "Maldives", src: "flags/mv.png" },
  { name: "Malawi", src: "flags/mw.png" },
  { name: "Mexico", src: "flags/mx.png" },
  { name: "Malaysia", src: "flags/my.png" },
  { name: "Mozambique", src: "flags/mz.png" },
  { name: "Namibia", src: "flags/na.png" },
  { name: "New Caledonia", src: "flags/nc.png" },
  { name: "Niger", src: "flags/ne.png" },
  { name: "Norfolk Island", src: "flags/nf.png" },
  { name: "Nigeria", src: "flags/ng.png" },
  { name: "Nicaragua", src: "flags/ni.png" },
  { name: "Netherlands", src: "flags/nl.png" },
  { name: "Norway", src: "flags/no.png" },
  { name: "Nepal", src: "flags/np.png" },
  { name: "Nauru", src: "flags/nr.png" },
  { name: "Niue", src: "flags/nu.png" },
  { name: "New Zealand", src: "flags/nz.png" },
  { name: "Oman", src: "flags/om.png" },
  { name: "Panama", src: "flags/pa.png" },
  { name: "Peru", src: "flags/pe.png" },
  { name: "French Polynesia", src: "flags/pf.png" },
  { name: "Papua New Guinea", src: "flags/pg.png" },
  { name: "Philippines", src: "flags/ph.png" },
  { name: "Pakistan", src: "flags/pk.png" },
  { name: "Poland", src: "flags/pl.png" },
  { name: "Saint Pierre & Miquelon", src: "flags/pm.png" },
  { name: "Pitcairn Islands", src: "flags/pn.png" },
  { name: "Puerto Rico", src: "flags/pr.png" },
  { name: "Palestine", src: "flags/ps.png" },
  { name: "Portugal", src: "flags/pt.png" },
  { name: "Palau", src: "flags/pw.png" },
  { name: "Paraguay", src: "flags/py.png" },
  { name: "Qatar", src: "flags/qa.png" },
  { name: "Réunion", src: "flags/re.png" },
  { name: "Romania", src: "flags/ro.png" },
  { name: "Serbia", src: "flags/rs.png" },
  { name: "Russia", src: "flags/ru.png" },
  { name: "Rwanda", src: "flags/rw.png" },
  { name: "Saudi Arabia", src: "flags/sa.png" },
  { name: "Solomon Islands", src: "flags/sb.png" },
  { name: "Seychelles", src: "flags/sc.png" },
  { name: "Sudan", src: "flags/sd.png" },
  { name: "Sweden", src: "flags/se.png" },
  { name: "Singapore", src: "flags/sg.png" },
  { name: "Saint Helena", src: "flags/sh.png" },
  { name: "Slovenia", src: "flags/si.png" },
  { name: "Svalbard & Jan Mayen", src: "flags/sj.png" },
  { name: "Slovakia", src: "flags/sk.png" },
  { name: "Sierra Leone", src: "flags/sl.png" },
  { name: "San Marino", src: "flags/sm.png" },
  { name: "Senegal", src: "flags/sn.png" },
  { name: "Somalia", src: "flags/so.png" },
  { name: "Suriname", src: "flags/sr.png" },
  { name: "South Sudan", src: "flags/ss.png" },
  { name: "São Tomé & Príncipe", src: "flags/st.png" },
  { name: "El Salvador", src: "flags/sv.png" },
  { name: "Sint Maarten", src: "flags/sx.png" },
  { name: "Syria", src: "flags/sy.png" },
  { name: "Eswatini", src: "flags/sz.png" },
  { name: "Turks & Caicos Islands", src: "flags/tc.png" },
  { name: "Chad", src: "flags/td.png" },
  { name: "French Southern Territories", src: "flags/tf.png" },
  { name: "Togo", src: "flags/tg.png" },
  { name: "Thailand", src: "flags/th.png" },
  { name: "Tajikistan", src: "flags/tj.png" },
  { name: "Tokelau", src: "flags/tk.png" },
  { name: "Timor-Leste", src: "flags/tl.png" },
  { name: "Turkmenistan", src: "flags/tm.png" },
  { name: "Tunisia", src: "flags/tn.png" },
  { name: "Tonga", src: "flags/to.png" },
  { name: "Turkey", src: "flags/tr.png" },
  { name: "Trinidad & Tobago", src: "flags/tt.png" },
  { name: "Tuvalu", src: "flags/tv.png" },
  { name: "Taiwan", src: "flags/tw.png" },
  { name: "Tanzania", src: "flags/tz.png" },
  { name: "Ukraine", src: "flags/ua.png" },
  { name: "Uganda", src: "flags/ug.png" },
  { name: "United States", src: "flags/us.png" },
  { name: "Uruguay", src: "flags/uy.png" },
  { name: "Uzbekistan", src: "flags/uz.png" },
  { name: "Vatican City", src: "flags/va.png" },
  { name: "Saint Vincent & Grenadines", src: "flags/vc.png" },
  { name: "Venezuela", src: "flags/ve.png" },
  { name: "British Virgin Islands", src: "flags/vg.png" },
  { name: "U.S. Virgin Islands", src: "flags/vi.png" },
  { name: "Vietnam", src: "flags/vn.png" },
  { name: "Vanuatu", src: "flags/vu.png" },
  { name: "Wallis & Futuna", src: "flags/wf.png" },
  { name: "Samoa", src: "flags/ws.png" },
  { name: "Kosovo", src: "flags/xk.png" },
  { name: "Yemen", src: "flags/ye.png" },
  { name: "Mayotte", src: "flags/yt.png" },
  { name: "South Africa", src: "flags/za.png" },
  { name: "Zambia", src: "flags/zm.png" },
  { name: "Zimbabwe", src: "flags/zw.png" },
];