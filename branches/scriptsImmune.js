$(document).ready(function(){						   
	var immuneTerms=new Array("infection","pathologic","infectious disease","normal (resident) biota","metagenomics","Human Microbiome Project","microbial antagonism","endogenous","pathogen","pathogenicity","true (primary) pathogens","opportunistic","virulence","virulence factor","portal of entry","exogenous","pneumonia","STD","phagocytes","exoenzymes","collagenase","toxin","exotoxin","fast food poisioning","endotoxin","toxoid","necrosis","primary infection","secondary infection","granuloma (abscesses)","lymphadenitis","leukocytosis","septicemia","asymptomatic, subclinical, or inapparent","acute infection","chronic infections","latency","reservoir","zoonosis","Rocky Mountain spotted fever","Psittacosis","Leptospirosis","Anthrax","Brucellosis","Plague","Salmonellosis","Tularemia","Ringworm","Toxoplasmosis","Trypanosomiasis","Trichinosis","Tapeworm","communicable","contagious","nosocomial","Koch's postulates","prevalence","incidence","mortality rate","morbidity rate","endemic","sporadic","epidemic","pandemic","incubation period","prodromal stage","period of invasion","convalescent period","skin infection","conjunctivitis","gastrointestinal tract infection","respiratory infection","urogenital infection","pregnancy and birth infections","adhesion","indirect virulence factors","compromised defenses","legionnaires","first line of defense","altered self","second line of defense","third line of defense","Frank Macfarlane Burnet","MHC","HLA","lysozyme","lymphatic vessels","GALT","MALT","thymus","bursa of Fabricius","spleen","lymph node","serum","plasma","hematopoiesis","granulocytes","agranulocytes","neutophil, PMN","basophil","eosinophil","mast cell","histamine","rbc","puffy coat","platelets","monocyte","macrophages","dendritic","lymphocytes","T cells","B cells","NK","-blast","-clast","yuppies","response to injury","leprosy","inflammation vascular change","edema","chemotaxis","pyogenic","benefits of fever","IFN","complement","initiation","amplification and cascade","polymerization","membrane attack","classical pathway","lectin pathway","alternative pathway","siderophores","antimicrobial peptides","Class I MHC molecule","Class II MHC molecule","T cell receptors","Ig surface receptor","CD3 molecule","CD4 molecule","CD8 molecule","Ig simple model structure","clonal selection","antigens (Ag)","haptens","T helper cell","antibodies (Ab, Ig) functions","IgG","IgA","IgM","IgD","IgE","latent period in antigen response","primary response to antigen","secondary response to antigen","T helper CD4 differentiation","TH1 or TDTH","TM (CD4)","TH2","TH17","TR or TS","TC or TK","acquired natural active immunity","acquired natural passive immunity","acquired artifical active immunity","acquired artifical passive immunity","whole cells or virus vaccines","antigenic molecules/subunits","herd immunity");
var immuneTotal=169;
var immuneCur=168;
var immuneFlip=false;//showing def
var immuneDef=new Array("a condition in which pathogenic microorganisms penetrate the host defenses, enter the tissues, and multiply","capable of inducing physical damage on the host","disruption of a tissue or organ caused by microbes or their products","large and mixed collection of microbes adapted to the body a.k.a normal flora","study of all the genomes in a particular ecological niche, as opposed to individual genomes from single species","NIH project to identify microbial inhabitants of the human body and their role in health and disease using metagenomic techniques instead of culturing","relationship in which microorganisms compete for survival in a common environment by taking actions that inhibit or destroy another organism","originating or produced within an organism or one of its parts","a microbe whose relationship with its host is parasitic and results in infection and disease","organism's potential to cause infection or disease","capable of causing disease in healthy persons with normal immune defenses","causes disease when the host's defenses are compromised or when they become established in a part of the body that is not natural to them","relative severity of the disease cause by a particular micoorganism determined by its ability to establish itself in the host and cause damage","microbe's structures or capabilities that allow it to establish itself in a host and cause damage","microbe enters the tissues of the body by a characteristic route, usually a cutaneous or membranous boundary","originating outside the body","inflammation of the lung leading to accumulation of fluid and respiratory compromise usually due to inhaled pathogens into the LRT","infections resulting from pathogens that enter the body via sexual intercourse or intimate, direct contact","white blood cells that ordinarily engulf and destroy pathogens by enzymes and antimicrobial chemicals","secretion that break down and inflict damage on tissues","exoenzyme that digests the principal fiber of connective tissue usually by Clostridium and some worms","specific chemical product of microbes, plants, and some animals that is poisonous to other organisms","small protein toxin secreted by a living bacterial cell into infected target tissues; unstable in high heat; can convert to toxoid; stimulate antitoxins; from few GM+/GM- bact","4-6hr release of exotoxin","molecule toxic in high doses, normally inside cell, secreted when the cell wall of a GM- bacteria disintegrates, has more generalized physiological effects (fever, inflammation)","synthetic nontoxic rendering of toxin still capable of eliciting antibody used in vaccines","accumulated damage leading to cell and tissue death","initial infection in a heathly individual that is later complicated by an additional (secondary) infection","a different microbe causes an infection compounding a preexisting infection","walled off collections of inflammatroy cells and microbes in tissue","swollen lymph nodes","increase in level of white blood cells","blood infection and multiplying in large numbers","infection that does not elicit sympthoms or disease","infections that come rapidly, with severe but short-lived effects","infections that progress and persist over a long period of time","dormant state that an infectious agent retreats to after the initial symptoms in certain chronic infectious diseases","primary habitat in the natural world from which a pathogen originates, often a human or animal carrier","infection indigenous to animals but naturally transmissible to humans","Rickettsia rickettsii normally on dogs and ticks causing small vessel vasculitis and human endothelical cell tropism","Chlamydia psittaci normally on birds/droppings causing blood-tinged sputum; dry cough; fatigue; fever and chills; headache","Leptospires spirochetes normally on domesitc animals causing fatal chronic liver and kidney disease","Bacillus anthracis normally on domestic animals causing skin, the gastrointestinal tract, or the lung complications","Brucella bacteria normally on cattle, sheep, pigs causing infertility and abortions","Yersinia pestis normally on rodents, fleas causing lymph node, lung, and blood infection","Escherichia Salmonella normally on variety of mammals, birds, rodents","Francisella tularensis normally on rodents, birds, arthropods","fungus tinea normally on domestic animals","protozoan Toxoplasma gondii normally on cats, rodents, birds","protozoan Trypanosoma normally on domestic and wild animals","animal roundworm Trichinella spiralis normally on swine, bears","animal tapeworm Cestoda normally on cattle, swine, fish","infected host can transmit the infectious agent to another host and establish infection in that host","highly communicable","infectious diseases acquired or developed during a hospital stay; usually spread via poor hygiene of medical staff to immune compromised patients","to link agent with disease: microbe found in a diseased subjects and not in healthy ones, isolate microbe and cultivate in pure culture, inoculate healthy subject and observe the same disease, reisolate agent from that subject","total number of existing cases with respect to the entire population","new cases over a certain time period","total deaths in a population due to a certain disease","number of persons afflicted with infectious diseases","concentrated in one area at a relatively stable rate","few cases occur randomly over a wide area","increased number of cases beyond what is expected often in clusters","epidemic over more than one continent","time during which the infectious agent is multiplying after the initial contact at portal of entry but you don't know you are sick b/c you don't have symptoms yet","earliest notable symptoms of infection appear as a vague feeling of discomfort","agent multiplies at high levels, exhibits greatest toxicity, and becomes well established in target tissue","recovery period where symptoms decline due to patient's immune response","infection usually through damaged skin via (nicks, abrasions, punctures); other passageways include digestive enzymes (helminth worms), bites, contaminated needles","pinkeye (Haemophilus aegyptius), trachoma (chlamydia trachomatis), Neisseria gonorrhoeae likes outer eye membrane","ingested enteric agents adapted to survive digestive enzymes and abrupt pH changes e.g. GM- rods can infect gut; anus is portal of entry in people who practice anal sex","oral/nasal cavities is portal of entry for greatest number of pathogens; continuous mucous membrane covering URT, sinuses, auditory tubes make infection in one area transferrable to other areas; small cells inhaled deeper than larger ones; LRT infections can cause pneumonia","STDs, displaced organisms, or opportunistic growth of normal biota","syphilis can cross placenta to fetus; herpes simplex can contaminate child via birth canal","fimbriae, capsules, or spikes on microbes to gain stability on host tissues","causes excessive or inappropriate host response e.g. capsule can block engulfment by phagocyte","old age, infancy; genetic defects, acquired defects (AIDS); surgery, organ transplant; underlying disease; chemotherapy, immunosuppressive drugs; physical, mental stress (do not produce mucous); other infections; pregnancy","air conditioning contamination that has water","innate, nonspecific: physical (skin, mucous); chemical (pH in gut, lysozymes); genetic (HLA)","cancers","amnestic, innate, nonspecific: inflammatory response, interferons, phagocytosis, complement","acquired, specific, memory immunity: natural (infection, resistant to exotic microbes; antibodies from mother; become tolerant to self), artifical (vaccination, immune serum); involves antibodies, B & T cells, accessory cells, cytokines","contributor to the theory of clonal selection, which explains how lymphocytes target antigens for destruction","major (mice) histocompatibility complex: gene region encoding for proteins that serve as signposts of self and nonself (pathogen)","human lymphocyte antigens: genes that encode for antigen presenting cells","enzyme hydrolyzes peptidoglycan in the cell wall of bacteria","circulation by muscle pressure","gut associated lymphoid tissue provides immune functions and antibodies against intestinal pathogens","mucosa associated lymphoid tissue","T cell maturation site; shrinks in adulthood","B cell maturation site in birds; human B cells mature in stromal cells in some bone marrow","filters blood","clusters of lymphatic channels and blood vessels filter lymph and provide appropriate cells and niches for immune reactions","same as plasma but clear fluid from clotted blood","water; albumin, globulin (antibodies); immunochemicals; fibrinogen, clotting factors; hormones; nutrients; ions (Na, K); dissolved gases (O2, CO2); waste products (urea)","production of blood cells; yolk sac assumed by red bone marrow; stem cell differentiate into rbc, wbc, platelets","lobed nucleus, large granules: neutrophil, basophil, eosinophil, mast","rounded nucleus, tiny granules: monocyte, lymphocyte, macrophages, dendritic, T, B, NK","polymorphic nucleus, blood phagocytes, engulf bacteria (elevated level = infection), picks up both dyes","inflammatory and allergies, basic blue dye; produces histamine","bursts oxygen on worm, fungal infections, inflammation, and allergies; acidic red dye","inflammatory and allergies; produces histamine","vasoactive mediator produced by mast cells and basophils causing vasodilation, increased vascular permeability, and mucus production involved in inflammation and allergy","carry O2 and CO2","thin layer between plasma and rbc containing wbc when blood containing anticoagulants sit","blood clotting and inflammation","blood phagocytes that rapidly leave circulation (high levels in early infection) and mature into macrophages or dendritic cells","largest phagocyte that ingest foreign cells; can become APC; involved in specific immune reactions; releases endogenous pyrogens IL-1 and TNF","reside outside tissue and reticuloendothelia system; process (bind MHC molecule) and present antigen to T lymphocytes","specific immune reaction to foreign matter","cell mediated immunity/response, assist B cells and kill foreign cells, twice as many T than B; has T-cell receptors and CD molecules on surface; at paracortical lymphatic sites; recognizes self; suppressing, killing abnormal cells; hypersensitivity; synthesizes cytokines","differentiate into plasma cells and form antibodies to inactivate, neutralize, target antigens (humoral immunity); does not recognize self; at cortex of lymphatic organs; Ig markers on surface","natural killer cells like T cell but no specific antigen, kills cancerous and virus infected cells","forming, developing baby cell","eatter","young urban professionals get viral chronic fatigue syndrome (CFS) b/c of close vicinity in college campuses and stress exacerbate","injury, rubor (blister, pyrogens produce heat to elevate temperature), tumor (swelling, loss of function), dolor (prostaglandins stimulate pain)","Mycobacterium leprae, long incubation time, causes disfiguring skin sores and nerve damage","after injury, blood vessels constrict and mediators (cytokines, vasoactive mediators, chemokines) are released causing blood vessels to dilate","accumulation of fluid (plasma) in afflicted tissue, causes swelling and hardness, infiltration of site by neutrophils; macrophages and lymphocytes eventually repair or scar tissue","tendency of cells to migrate in response to specific chemical stimulus given off at site of injury or infection","pus-forming","inhibits multiplication of temperature sensitive microbes, inhibits macrophage iron release (inhibits some enzymatic reactions for bacterial growth), and speeds up hematopoiesis, phagocytosis and specific immune reactions","interferon produced by some wbc and tissue cells to combat viruses; infected cell releases IFN that signals antiviral protein production in secondary cells","26 blood proteins work in concert to form donut-shaped C5-9 membrane attack complex to destroy bacteria and certain viruses using 3 pathways: classical, lectin, and alternative","C1 components bind to antibodies on foreign cell","C1 activates a series of components, cleave, and eventually activates C5b binding to membrane","C6 C7 C8 integrate with C5 on membrane and up to 15 C9s form a ring around the site","donut-shaped enzyme punctures small pores through out membrane leading to cell lysis","rapid, efficient; complement fixing antibodies (IgG, IgM) activate C1 complex involving C1 C2 C3 C4","mannans activate mannose-binding lectin involving C2 C4","slower, less-effective; bacterial or fungal cell wall, viruses, parasite surfaces activate C3 involving C3, factor B, factor D, properdin","bacterial proteins that steal iron from human iron-binding proteins for metabolism","short proteins inserted into prokaryote membranes to kill them","recognize self; on all nucleated human cells; closer blood relative more similar the MHC profiles","recognize non-self; on some wbc","bind to processed antigens (MHC molecules on antigen presenting cell surface)","on B cells that bind to antigens","surround T cell receptors","on T helper cells binds to MHC class II non self molecules","on cytotoxic suppressor T cells binds to MHC class I self molecules","4 polypeptide chains: 2 identical light chains and 2 identical heavy chains bound by disulfide bonds consisting of variable region (binding site for antigen) and constant regions","lymphocyte stem cell differentiates into na�ve/virgin B cell clones each having receptors for one type of molecule, clones with self receptors are deleted, antigen selects B clone with the best fit, T cells stimulate B clone and produce cytokines, B cell become B memory (remain for long period to react with antigen at a later time), B regulatory secrete IL-10 supresses T helper cells, and B plasma (produces antibodies) that secrete antibodies","substance provoking immune response to specific lymphocytes","foreign molecules too small to elicit an immune response, but if attached to a carrier molecule it becomes an antigen","CD4 receptor on T helper cell binds to MHC II antigen on APC and produces cytokine IL-2","tag bacterial cell, opsonized bateria more readily engulfed by macrophage, block antigens, agglutination clumps bacterial cells, complement fixation lyse bacterial cells, precipitation clump antigens","monomer, 2 antigen binding sites, 150 000 molecular weight, crosses placenta, fixes complement, long term immunity, memory antibodies, neutralize toxins, opsonizes","dimer/monomer, 4/2 antigen binding sites, 320 000 molecular weight; secretory antibody on mucous membranes","pentamer, 10 antigen binding sites, million molecular weight, fixes complement, produced at first response to antigen, least specific; can serve as a B cell receptor","monomer, 2 antigen binding sites, 180 000 molecular weight, receptor on B cells (non functional byproduct)","monomer, 2 antigen binding sites, 200 000 molecular weight, antibody of allergy, worm infections","after exposure to antigen, clonal selection starts","usually IgM presented to antigen first and memory cells produced; followed by a variable time interval","anamnestic response is quicker due to memory cells produced in primary response, usually IgG","after stimulation by antigen/MHC complex, T helper cell differentiates into TH1, TH2, TH17, TM, TR","delayed-type hypersensitivity (allergy occuring several hrs/days after contact); production of tumor necrosis factor and interferon gamma, stimulate macrophages","memory CD4 T cell","produces IL-4 and other B cell growth factors","inflammation","suppressor, dampens immune response as appropriate so don't burn out immune system and prevents autoimmunity","cytotoxic CD8 receptor T cell destroys complex microbes, cancer cells, virus-infected cells, graft rejection, by perforins and granzymes","recover from infection","mother to child","vaccine","immunotheraphy","live, attenuated cells or viruses; or killed cells or inactivated viruses stimulate immunity but cause no disease","antigens (from culture, synthesized, genetic enginered, or conjugated with proteins from other microbes) stimulate immunity but no pathogen is present","individuals immune to a communicable infectious disease will not harbor it, reducing occurrence of pathogen and infection in unvaccinated population");
	$("#immuneFlashcard").css({"background-color":"white","height":"300px","width":"500px","text-align":"center","cursor":"pointer"});
	/*
	immuneCur=148;
	$("#immuneFlashcard").html("<strong>"+immuneTerms[immuneCur]+"</strong>");
	immuneFlip=true;
	*/
	$("#immuneFlashcard").click(function () { 
		if(immuneFlip){//show def?
			$("#immuneFlashcard").html("<strong>"+immuneTerms[immuneCur]+"</strong><br/><br/>"+immuneDef[immuneCur]);
			immuneFlip=false;
		}else{//do new
			if($("#immuneRand").is(':checked')){
				immuneCur=Math.round(Math.random()*immuneTotal);
				if(immuneCur==immuneTotal) immuneCur=0;
			}else{
				immuneCur++;
				if(immuneCur==immuneTotal) immuneCur=0;
			}
			$("#immuneFlashcard").html("<strong>"+immuneTerms[immuneCur]+"</strong>");
			immuneFlip=true;
		}
    });
 });