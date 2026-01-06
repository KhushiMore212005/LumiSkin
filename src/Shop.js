import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./Shop.css";
import aquaporinImg from "./assets/Aquaporin.png";
import niacinamideImg from "./assets/Niacinamide.png";
import himalayaImg from "./assets/Himalaya.png";
import biotiqueImg from "./assets/Biotique.png";
import garnierImg from "./assets/Garnier.png";
import pondsImg from "./assets/Ponds.png";
import cicaImg from "./assets/Cica.png";
import dermaImg from "./assets/Derma.png";
import foxtaleImg from "./assets/Foxtale.png";
import mamaearthImg from "./assets/Mamaearth.png";
import plumImg from "./assets/Plum.png";
import simpleImg from "./assets/Simple.png";
import episoftImg from "./assets/Episoft.png";
import bodyImg from "./assets/Body1.png";
import novologyImg from "./assets/Novology.png";
import uriageImg from "./assets/Uriage.png";
import biodermaImg from "./assets/Bioderma.png";
import claycoImg from "./assets/Clayco.png";
import sebamedImg from "./assets/Sebamed.png";
import ciplaImg from "./assets/Cipla.png";
import sailacImg from "./assets/Sailac.png";
import ayumcureImg from "./assets/Ayumcure.png";
import neutrogenaImg from "./assets/Neutrogena.png";
import forestImg from "./assets/Forest.png";
import aveenoImg from "./assets/Aveeno.png";
import larocheImg from "./assets/Laroche.png";
import centImg from "./assets/Cent.png";
import thefaceImg from "./assets/Theface.png";
import eucImg from "./assets/Euc.png";
import eucgelImg from "./assets/Eucgel.png";
import sebumImg from "./assets/Sebum.png";
import beautyImg from "./assets/Beauty.png";
import cliniqueImg from "./assets/Clinique.png";
import muradImg from "./assets/Murad.png";
import paulaImg from "./assets/Paula.png";
import aesturaImg from "./assets/Aestura.png";
import cosrxImg from "./assets/Cosrx.png";
import solvedImg from "./assets/Solved.png";



/*Serum*/
import himalayaserumImg from "./assets/Himalayaserum.png";
import plumserumImg from "./assets/Plumserum.png";
import dermaserumImg from "./assets/Dermaserum.png";
import chemistserumImg from "./assets/Chemistserum.png";
import insightserumImg from "./assets/Insightserum.png";
import pilgrimserumImg from "./assets/Pilgrimserum.png";
import flywingserumImg from "./assets/Flywingserum.png";
import garnierserumImg from "./assets/Garnierserum.png";
import bonberryserumImg from "./assets/Bonberryserum.png";
import clariveserumImg from "./assets/Clariveserum.png";
import miniserumImg from "./assets/Miniserum.png";
import natureserumImg from "./assets/Natureserum.png";
import foxtaleserumImg from "./assets/Foxtaleserum.png";
import o3pluserumImg from "./assets/O3pluserum.png";
import esteeserumImg from "./assets/Esteeserum.png";
import coserumImg from "./assets/Coserum.png";
import skinserumImg from "./assets/Skinserum.png";
import lacserumImg from "./assets/Lacserum.png";
import ordiserumImg from "./assets/Ordiserum.png";
import beautyserumImg from "./assets/Beautyserum.png";
import cosrxserumImg from "./assets/Cosrxserum.png";
import lorealserumImg from "./assets/Lorealserum.png";
import drshethserumImg from "./assets/Drshethserum.png";
import indusserumImg from "./assets/Indusserum.png";
import laroacheserumImg from "./assets/Laroacheserum.png";
import actiumserumImg from "./assets/Actiumserum.png";
import dotserumImg from "./assets/Dotserum.png";
import dotkeyserumImg from "./assets/Dotkeyserum.png";

/*Moisturizer*/
import simplemoistImg from "./assets/Simplemoist.png";
import dotmoistImg from "./assets/Dotmoist.png";
import foxtalemoistImg from "./assets/Foxtalemoist.png";
import srimoistImg from "./assets/Srimoist.png";
import pondsmoistImg from "./assets/Pondsmoist.png";
import mamamoistImg from "./assets/Mamamoist.png";
import reequilmoistImg from "./assets/Reequilmoist.png";
import niviamoistImg from "./assets/Niviamoist.png";
import skinmoistImg from "./assets/Skinmoist.png";
import cosdermamoistImg from "./assets/Cosdermamoist.png";
import rainmoistImg from "./assets/Rainmoist.png";
import cliniquemoistImg from "./assets/Cliniquemoist.png";
import lorachemoistImg from "./assets/Lorachemoist.png";
import codemoistImg from "./assets/Codemoist.png";
import thalgomoistImg from "./assets/Thalgomoist.png";
import epiquemoistImg from "./assets/Epiquemoist.png";
import hydramoistImg from "./assets/Hydramoist.png";
import venumoistImg from "./assets/Venumoist.png";
import brintonmoistImg from "./assets/Brintonmoist.png";
import sebamoistImg from "./assets/Sebamoist.png";

/*Sunscreen*/
import dermasunImg from "./assets/Dermasun.png";
import fixdermasunImg from "./assets/Fixdermasun.png";
import aquasunImg from "./assets/Aquasun.png";
import lakmesunImg from "./assets/Lakmesun.png";
import lotussunImg from "./assets/Lotussun.png";
import pondssunImg from "./assets/Pondssun.png";
import lactosunImg from "./assets/Lactosun.png";
import earthsunImg from "./assets/Earthsun.png";
import scoopsunImg from "./assets/Scoopsun.png";
import streaxsunImg from "./assets/Streaxsun.png";
import garniersunImg from "./assets/Garniersun.png";
import neutrosunImg from "./assets/Neutrosun.png";


export default function Shop() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Cleanser");
  const [budgetRange, setBudgetRange] = useState("All");
  const [skinType, setSkinType] = useState("All");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setBudgetRange("All");
    setSkinType("All");
  };


  const products = [
    {
      id: 1,
      name: "Aquaporin Booster 5% Cleanser",
      price: 284,
      category: "Cleanser",
      skin: ["Dry", "Normal"],
      img: aquaporinImg,
      link: "https://beminimalist.co/products/aquaporin-booster-05-cleanser"
    },
    {
      id: 2,
      name: "2% Niacinamide Gentle Skin Cleanser",
      price: 263,
      category: "Cleanser",
      skin: ["Oily", "Combination"],
      img: niacinamideImg,
      link:
        "https://thedermaco.com/product/2-niacinamide-gentle-skin-cleanser-for-sensitive-dry-normal-skin-125-ml"
    },
    {
      id: 3,
      name: "Himalaya Purifying Neem Face Wash",
      price: 90,
      category: "Cleanser",
      skin: ["Normal"],
      img: himalayaImg,
      link:"https://himalayawellness.in/products/himalaya-purifying-neem-face-wash?_pos=1&_sid=40b367cdf&_ss=r"
    },

    {
      id: 4,
      name: "Biotique Bio Neem Purifying Face Wash",
      price: 79,
      category: "Cleanser",
      skin: ["Oily", "Normal", "Combination","Dry"],
      img: biotiqueImg,
      link: "https://www.biotique.com/products/fresh-neem-pimple-control-face-wash?srsltid=AfmBOoq0Xf363S3xrfKwzS2jp2KkwYM5rFA3pL_FZiv7psVcIx7zgPQh"
    },

    {
      id: 5,
      name: "Garnier Bright Complete Face Wash",
      price: 209,
      category: "Cleanser",
      skin: ["Oily", "Normal", "Combination","Dry"],
      img: garnierImg,
      link: "https://www.garnier.in/about-our-brands/skin-naturals/bright-complete/facewash"
    },

    {
      id: 6,
      name: "POND’S Pimple Clear Face Wash",
      price: 295,
      category: "Cleanser",
      skin: ["Oily","Dry"],
      img: pondsImg,
      link: "https://ponds.in/products/pimple-clear-germ-removal-facewash?srsltid=AfmBOooyOTdWr5gtBP9cHWErRNoUnc64J_KNzk6WHpRoH6Vo5ea8j8P5&variant=42450340806889"
    },

     {
      id: 7,
      name: "Dot & Key Cica Salicylic & Green Tea Face Wash",
      price: 249,
      category: "Cleanser",
      skin: ["Oily"],
      img: cicaImg,
      link: "https://www.dotandkey.com/products/cica-calming-blemish-clearing-face-wash?srsltid=AfmBOoptSmFAxwi3T3odNOENX11zmFJ_9xSzPE8tQfoFrjzNgC5DYj8Z"
    },

     {
      id: 8,
      name: "Dermatouch salicylic acid face wash",
      price: 269,
      category: "Cleanser",
      skin: ["Normal","Oily"],
      img: dermaImg,
      link: "https://dermatouch.com/products/dermatouch-salicylic-acid-2-face-wash?variant=46174018207895#whatmoreLive"
    },

     {
      id: 9,
      name: "Foxtale Super Glow Face Wash",
      price: 249,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: foxtaleImg,
      link: "https://foxtale.in/products/super-glow-face-wash?srsltid=AfmBOopT2mZxumwjxUQhQIVpMESXKDGo0Z5VcpUbRezYLLN8P5BvQ52x"
    },

     {
      id: 10,
      name: "Mamaearth Rice Face Wash with Niacinamide & Rice Water",
      price: 269,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: mamaearthImg,
      link: "https://mamaearth.in/product/rice-face-wash-with-rice-water-niacinamide-for-glass-skin-100-ml?srsltid=AfmBOoqtMakjrkDVuQ0kMMdW255IKoW-LQuEV5-3u8Rng12D3Plqj7ds"
    },

    {
      id: 11,
      name: "Plum 2% Niacinamide Face Wash With Rice Water",
      price: 333,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: plumImg,
      link: "https://www.google.com/search?q=Plum+2%25+Niacinamide+Face+Wash+With+Rice+Water&oq=Plum+2%25+Niacinamide+Face+Wash+With+Rice+Water&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQLhiABBjlBDIMCAIQABgUGIcCGIAEMgcIAxAAGIAEMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB7SAQc5MzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#sv=CAYSowISABosMmFoVUtFd2k4MmZDM3p1V1JBeFV3YXZVSEhiTk5BdEFRZ2kxNkJBZ3VFQmMivwEKFDExNzcwMjE0NDgwNDk1MDg0NzAzEhQxMjkxOTc2NTE0MzU3MjkyMTcwNyIUMTAzMTMwMzQ2ODUzNDAwNzkyODIyEzE2NjEwMzY1NzQ5NjM4MDMwMDA6EjU3NjQ2MjUxNjk1OTAwODY3NUoCaGdSMlBDXzE2NjEwMzY1NzQ5NjM4MDMwMDB8UFJPRF9QQ18xNjYxMDM2NTc0OTYzODAzMDAwoAED8AEAggITOTkzMDg2MjgxMTc2ODI5NjM5NDAAQi0yYWhVS0V3aTgyZkMzenVXUkF4VXdhdlVISGJOTkF0QVFyb2dHZWdRSUxoQUsg6O7MAjACSgoIARACGAEgASgB"
    },

    {
      id: 12,
      name: "Simple Kind to Skin Refreshing Facial Wash",
      price: 378,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: simpleImg,
      link: "https://www.simpleskincare.in/products/simple-kind-to-skin-refreshing-facial-wash-150ml?srsltid=AfmBOopIj6pigmdjsiMBkXa1yKmdBcrIcfh0SYOVKWyXUr9ogsAIe647"
    },

    {
      id: 13,
      name: "Episoft Cleansing Lotion",
      price: 509,
      category: "Cleanser",
      skin: ["Dry"],
      img: episoftImg,
      link: "https://www.clinikally.com/products/episoft-cleansing-lotion?currency=INR&variant=43606617456887&stkn=aa4fff04d0da&utm_campaign=P-Max&utm_source=Google&utm_medium=Shopping+Ad&gad_source=1&gad_campaignid=17519849480&gbraid=0AAAAABUpsHLau4syTvdK1ZtHREY4l3blr&gclid=CjwKCAiAjc7KBhBvEiwAE2BDORr6nVZ4_qYvzfneZ9aQuZvI6zX8bVeKWx3AF6byoGOiii5T8iYiNxoCT14QAvD_BwE"
    },

    {
      id: 14,
      name: "The Body Shop Tea Tree Skin Clearing Facial Wash",
      price: 486,
      category: "Cleanser",
      skin: ["Oily"],
      img: bodyImg,
      link: "https://www.thebodyshop.in/tea-tree-facial-wash-250ml/p/p167004?utm_source=google&utm_medium=pmax&utm_campaign=TheBodyShop_PMax_PANIndia_28032022&utm_id=19897083751&assetgroupid=6651259051&adtype=pla&productid=BS-33429001&gclid=CjwKCAiAjc7KBhBvEiwAE2BDOTjipGCcpBwbbUP8ngumdz4ukonTVfaWEN8bx-D6C78WTrBX0cQQuBoCmTAQAvD_BwE&gad_source=1&gad_campaignid=19889083632&gbraid=0AAAAADAi2UiO0QWqRmZtTZ_2tCDJxt4At"
    },

    {
      id: 15,
      name: "Novology Acne Clearing Foaming Cleanser",
      price: 552,
      category: "Cleanser",
      skin: ["Oily"],
      img: novologyImg,
      link: "https://www.amazon.in/Novology-Reduction-Whiteheads-Blackheads-Specialised/dp/B0CTTCDM8T"
    },

    {
      id: 16,
      name: "Uriage Depiderm Brightening Face Wash",
      price: 1690,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: uriageImg,
      link: "https://www.amazon.in/Uriage-Depiderm-Brightening-Cleansing-Foaming/dp/B008OF1VX8"
    },

     {
      id: 17,
      name: "Bioderma Pigmentbio Foaming Cream Cleanser",
      price: 899,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: biodermaImg,
      link: "https://www.nykaa.com/bioderma-pigmentbio-foaming-cream-brightening-exfoliating-cleanser/p/1167459?ptype=product&skuId=1167459&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PerformanceMax_Skin_TopSKUS_1Day&gad_source=1&gad_campaignid=23391621821&gbraid=0AAAABBsUhjQmDTmv-Yu8DF-EanIXUUJ-G&gclid=CjwKCAiAjc7KBhBvEiwAE2BDOdekGMCfI0XODxry58fUQWui3hfmlbqvBgo92gQr0U83PphXYL6wuxoCa0cQAvD_BwE"
    },

     {
      id: 18,
      name: "ClayCo Matcha Enzyme Scrub with AHA & BHA",
      price: 749,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: claycoImg,
      link: "https://clayco.in/products/matcha-enzyme-scrub-with-aha-bha-70g?srsltid=AfmBOorVEGURt5t_Htm18E_u7KV_kK3Pc32tfLF8s8G1KDaF0zao8Lvk"
    },

    {
      id: 19,
      name: "Sebamed Clear Face Cleansing Foam",
      price: 646,
      category: "Cleanser",
      skin: ["Oily","Dry","Normal"],
      img: sebamedImg,
      link: "https://www.amazon.in/SebaMed-Clear-Face-Cleansing-150ml/dp/B00BMMO7IQ?th=1"
    },

    {
      id: 20,
      name: "Cipla Saslic Foaming Face Wash",
      price: 419,
      category: "Cleanser",
      skin: ["Oily"],
      img: ciplaImg,
      link: "https://www.amazon.in/Cipla-Ltd-Saslic-Foaming-Face/dp/B078PZYPP7?th=1"
    },

    {
      id: 21,
      name: "Saliac Face Wash",
      price: 425,
      category: "Cleanser",
      skin: ["Oily","Combination"],
      img: sailacImg,
      link: "https://www.amazon.in/Saliac-Tube-60ml-Face-Wash/dp/B0BZZQWPR6"
    },

    {
      id: 22,
      name: "Ayumcure 5% Niacinamide Anti-Acne & Oil Control Face Wash",
      price: 549,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: ayumcureImg,
      link: "https://ayumcure.in/Ayumcure-5--Niacinamide-Face-Wash-with-0.5--Salicylic/catalogue/cdTId6_Y/oLtKq4KS"
    },

    {
      id: 23,
      name: "Neutrogena Deep Clean / Oil-Free Acne Wash",
      price: 666,
      category: "Cleanser",
      skin: ["Oily"],
      img: neutrogenaImg,
      link: "https://www.amazon.in/Neutrogena-Free-Acne-Face-175ml/dp/B006LXDMCS"
    },

    {
      id: 24,
      name: "Forest Essentials Kashmiri Saffron Neem Delicate Facial Cleanser",
      price: 495,
      category: "Cleanser",
      skin: ["Oily","Combination"],
      img: forestImg,
      link: "https://www.forestessentialsindia.com/travel-size-delicate-facial-cleanser-kashmiri-saffron-neem.html"
    },

    {
      id: 25,
      name: "Aveeno Clear Complexion Foaming Cleanser",
      price: 1085,
      category: "Cleanser",
      skin: ["Oily","Combination","Dry","Normal"],
      img: aveenoImg,
      link: "https://www.amazon.in/Aveeno-Clear-Complexion-Foaming-Cleanser/dp/B00006FRW9"
    },

    {
      id: 26,
      name: "La Roche-Posay Effaclar Purifying Foaming Gel",
      price: 2095,
      category: "Cleanser",
      skin: ["Oily"],
      img: larocheImg,
      link: "https://www.amazon.in/Roche-Posay-Effaclar-Purifying-Foaming-200ml/dp/B002P3L99G?th=1"
    },

    {
      id: 27,
      name: "Skin1004 Madagascar Centella Ampoule Foam",
      price: 945,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: centImg,
      link: "https://skin1004india.com/products/skin1004india-madagascar-centella-ampoule-foam?srsltid=AfmBOorh33Rb00jSvIPkuu3BjTqEpq7KuL4qsUdMmN81F1_qx4cw6ntj&variant=42165019672687"
    },

     {
      id: 28,
      name: "The Face Shop Rice Water Bright Foaming Face Wash",
      price: 585,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: thefaceImg,
      link: "https://www.amazon.in/Face-Shop-Cleansing-Brighten-Moisturization/dp/B09P51T9FK/ref=asc_df_B09P51T9FK?mcid=ab703885e53b39dd938acec0c9f9f2f0&tag=googleshopdes-21&linkCode=df0&hvadid=709979221152&hvpos=&hvnetw=g&hvrand=18146816635315912271&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062215&hvtargid=pla-1570105026866&gad_source=1&th=1"
    },

     {
      id: 29,
      name: "Eucerin pH5 Gentle Cleansing Face & Body",
      price: 2199,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: eucImg,
      link: "https://www.amazon.in/eucerin-advanced-cleansing-cleanser-fluid/dp/B003ZC403S"
    },

    {
      id: 30,
      name: "Eucerin Hydrating Cleansing Gel",
      price: 1580,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: eucgelImg,
      link: "https://www.amazon.in/Eucerin-Hydrating-Cleansing-Formulated-Hyaluronic/dp/B094NWLKKZ/ref=dp_fod_d_sccl_3/524-3849938-0374144?pd_rd_w=JjGu3&content-id=amzn1.sym.e1eec8db-56ca-44a9-82e2-70d7d375f0a0&pf_rd_p=e1eec8db-56ca-44a9-82e2-70d7d375f0a0&pf_rd_r=9PQVJAJSCSN9S3F6NCHV&pd_rd_wg=1sGAi&pd_rd_r=b7c89015-ffad-4170-8386-c681892919d8&pd_rd_i=B094NWLKKZ&psc=1"
    },

    {
      id: 31,
      name: "Bioderma Sebium Gel Moussant",
      price: 809,
      category: "Cleanser",
      skin: ["Oily"],
      img: sebumImg,
      link: "https://bioderma.naosindia.in/products/sebium-gel-moussant?variant=39830898114614&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=cpc&utm_campaign=NPD-Pmax-Combined-All_Sales-June25&utm_adgroup={adgroupname}&utm_term=&utm_content=&gclid=CjwKCAiAmePKBhAfEiwAU3Ko3P6RUFhzQorw6kZLm56J1-EZV944xruQFANwtnTb_sEBJiGmlVXw-xoC4fsQAvD_BwE&gad_source=1&gad_campaignid=22731889323&gbraid=0AAAAAoX82kGlzd43hXaBJk2-r9L6BeBZm"
    },

    {
      id: 32,
      name: "Beauty Of Joseon Green Plum Refreshing Cleanser",
      price: 1300,
      category: "Cleanser",
      skin: ["Oily","Dry","Combination","Normal"],
      img: beautyImg,
      link: "https://beautyofjoseon.com/products/green-plum-refreshing-cleanser?srsltid=AfmBOoqXx6RvCrTSTHJTQcZFIV8Z_4xDjfbj8JuXkCwtHGSIUKV6Mjyw"
    },

    {
      id: 33,
      name: "Clinique Rinse Off Foaming Cleanser",
      price: 1100,
      category: "Cleanser",
      skin: ["Oily"],
      img: cliniqueImg,
      link: "https://www.nykaa.com/clinique-all-about-clean-rinse-off-foaming-cleanser/p/4356482?ptype=product&skuId=4356482&srsltid=AfmBOoowu7youP4l8n16lRKLL0GuTsFYsA2DsAxyk_40FzyyyhYjTLxcMSI"
    },

    {
      id: 34,
      name: "Murad Essential-C Cleanser",
      price: 3500,
      category: "Cleanser",
      skin: ["Dry"],
      img: muradImg,
      link: "https://www.nykaa.com/murad-essential-c-cleanser/p/19582835"
    },

    {
      id: 35,
      name: "Paula’s Choice Clear Pore Normalizing Cleanser",
      price: 1350,
      category: "Cleanser",
      skin: ["Oily","Combination"],
      img: paulaImg,
      link: "https://www.paulaschoice.in/products/clear-pore-normalizing-cleanser?srsltid=AfmBOopiBmzv3MnWwh0Fb_4qn03PZueLpekcXFYv2jKiWj-MaqQNhX9a"
    },

    {
      id: 36,
      name: "Aestura Atobarrier365 Foaming Cleanser",
      price: 1170,
      category: "Cleanser",
      skin: ["Oily","Combination","Dry","Normal"],
      img: aesturaImg,
      link: "https://www.nykaa.com/aestura-atobarrier365-foaming-cleanser/p/18814327"
    },

    {
      id: 37,
      name: "COSRX Low pH Good Morning Gel Cleanser",
      price: 765,
      category: "Cleanser",
      skin: ["Oily"],
      img: cosrxImg,
      link: "https://www.nykaa.com/cosrx-low-ph-good-morning-gel-cleanser/p/757643"
    },

    {
      id: 38,
      name: "THE SOLVED SKIN Dermatologically Tested Acnewash",
      price: 691,
      category: "Cleanser",
      skin: ["Oily","Normal"],
      img: solvedImg,
      link: "https://www.amazon.in/SOLVED-SKIN-Dermatologically-Micronized-Peroxide/dp/B0D8FR23YW?th=1"
    },


    /*Serums*/
    {
      id: 1,
      name: "Himalaya Brightening Serum",
      price: 231,
      category: "Serum",
      skin: ["Oily","Normal","Dry","Combination"],
      img: himalayaserumImg,
      link: "https://www.amazon.in/Himalaya-Brightening-Vitamin-Niacinamide-Brighter/dp/B0DCW1F242?th=1"
    },

    {
      id: 2,
      name: "2% Encapsulated Salicylic Acid Anti-Acne Face Serum",
      price: 521,
      category: "Serum",
      skin: ["Oily","Normal","Dry","Combination"],
      img: plumserumImg,
      link: "https://plumgoodness.com/products/plum-thinkderma-2-encapsulated-salicylic-acid-face-serum-fights-active-acne-regulates-sebum-controls-oil-calms-soothes-inflammation-lightweight-quick-absorbing-100-vegan?srsltid=AfmBOooSG1rlycdlrKx6sUSlnX_94-4uPwopbaAcJ7n8rSUBgQanshKm"
    },

    {
      id: 3,
      name: "The Derma Co 10% Niacinamide Face Serum",
      price: 208,
      category: "Serum",
      skin: ["Oily"],
      img: dermaserumImg,
      link: "https://www.amazon.in/Derma-Co-Niacinamide-Serum-Marks/dp/B0957VWFBG?th=1"
    },

    {
      id: 4,
      name: "Chemist At Play Face Serum",
      price: 209,
      category: "Serum",
      skin: ["Oily","Combination"],
      img: chemistserumImg,
      link: "https://www.nykaa.com/chemist-at-play-2percent-salicylic-acid-face-serum-treats-active-acne-controls-excess-oil/p/20753329?ptype=product&srsltid=AfmBOooGjySIINiBk1r0iSG0756ABIbr4sDi5MkOxY2ArYfyMAI9Wzg0548&skuId=19852291"
    },

    {
      id: 5,
      name: "Insight Cosmetics Brightening & Skin Repair Face Serum",
      price: 299,
      category: "Serum",
      skin: ["Dry","Normal"],
      img: insightserumImg,
      link: "https://insightcosmetics.in/products/brightening-skin-repair-face-serum?srsltid=AfmBOop7k_T3ZS8HghJ1uZWJz38-khAhkRgWx4hfqsv_fXeQpVFj_LhH"
    },

    {
      id: 6,
      name: "Pilgrim Face Serum",
      price: 645,
      category: "Serum",
      skin: ["Dry","Normal","Oily","Combination"],
      img: pilgrimserumImg,
      link: "https://discoverpilgrim.com/products/10-vitamin-c-face-serum-for-daily-brightness"
    },

    {
      id: 7,
      name: "Flywing 15% Vitamin C + E Serum",
      price: 267,
      category: "Serum",
      skin: ["Dry","Normal","Oily","Combination"],
      img: flywingserumImg,
      link: "https://www.flipkart.com/flywing-15-vitamin-c-e-face-serum-glowing-skin-vit-blueberry-fruit-extract-hyaluronic-acid-fades-dark-spots-all-types/p/itm83d8604da5c3e"
    },

    {
      id: 8,
      name: "Garnier Bright Complete Vitamin C Serum",
      price: 619,
      category: "Serum",
      skin: ["Dry","Normal","Oily","Combination"],
      img: garnierserumImg,
      link: "https://www.garnier.in/about-our-brands/skin-naturals/bright-complete/vitamin-c-face-serum"
    },

    {
      id: 9,
      name: "Bonberry 10% Vitamin C Face Serum",
      price: 249,
      category: "Serum",
      skin: ["Oily","Combination"],
      img: bonberryserumImg,
      link: "https://www.amazon.in/Bonberry-Non-Irritating-Non-Sticky-Sensitive-Beginner-Friendly/dp/B0FP5LNVXZ"
    },

    {
      id: 10,
      name: "Clariv Anti-Acne Serum",
      price: 449,
      category: "Serum",
      skin: ["Oily","Combination","Dry","Normal"],
      img: clariveserumImg,
      link: "https://www.clariv.in/clariv-anti-acne-serum-salicylic-acid"
    },

    {
      id: 11,
      name: "Minimalist Niacinamide Face Serum",
      price: 569,
      category: "Serum",
      skin: ["Oily","Combination","Dry","Normal"],
      img: miniserumImg,
      link: "https://beminimalist.co/products/niacinamide-10-with-matmarine?srsltid=AfmBOoovtCWD1adFuWxDKMX7PlRcOfDM-1EFtBnSQyW9h751d5EFWuWX"
    },

    {
      id: 12,
      name: "Nature's Essence Bright Glow Serum",
      price: 92,
      category: "Serum",
      skin: ["Oily","Combination","Dry","Normal"],
      img: natureserumImg,
      link: "https://www.amazon.in/Natures-Essence-Bright-Vitamin-Serum/dp/B0CNJW796H"
    },

    {
      id: 13,
      name: "Foxtale Brightening Serum",
      price: 229,
      category: "Serum",
      skin: ["Oily","Combination","Dry","Normal"],
      img: foxtaleserumImg,
      link: "https://www.myntra.com/serum-and-gel/foxtale/foxtale-eternal-light-gluta-vit-c-advanced-brightening-serum---10-ml/38436249/buy"
    },

    {
      id: 14,
      name: "O3+ Brightening Serum",
      price: 1401,
      category: "Serum",
      skin: ["Oily","Combination","Dry","Normal"],
      img: o3pluserumImg,
      link: "https://www.o3plus.com/products/facial-brightening-serum?srsltid=AfmBOoq3A-H7_RQMAsW2lCsSdaXAjkvo3ZmJc78xWUQz-BymdfGUGO30"
    },

    {
      id: 15,
      name: "Estée Lauder Advanced Night Repair Serum",
      price: 1250,
      category: "Serum",
      skin: ["Oily","Combination","Dry","Normal"],
      img: esteeserumImg,
      link: "https://www.nykaa.com/estee-lauder-advanced-night-repair-synchronized-multi-recovery-complex/p/833283?skuId=833278"
    },

    {
      id: 16,
      name: "CO LUXURY Glutathione Face Serum",
      price: 349,
      category: "Serum",
      skin: ["Oily","Combination","Dry","Normal"],
      img: coserumImg,
      link: "https://www.coluxury.in/products/co-luxury-co-gluta-2-glutathione-face-serum-with-vitamin-c-e-skin-brightening-anti-pigmentation-30ml?srsltid=AfmBOoqujG4lPL370Oyr-5RSVAdmyvTUm9DOm6IJqBLyyTrAcmpEv42S"
    },

    {
      id: 17,
      name: "SkinKraft Customized Face Serum",
      price: 449,
      category: "Serum",
      skin: ["Oily","Combination","Dry","Normal"],
      img: skinserumImg,
      link: "https://www.amazon.in/SkinKraft-Skin-Plumping-Facial-Serum/dp/B092JMPBB4?th=1"
    },

    {
      id: 18,
      name: "Lancôme Génifique Ultimate Serum",
      price: 1600,
      category: "Serum",
      skin: ["Oily","Combination","Dry","Normal"],
      img: lacserumImg,
      link: "https://www.nykaa.com/lancome-advanced-genifique-youth-activating-serum/p/9044718?skuId=21376559"
    },

    {
      id: 19,
      name: "The Ordinary Hyaluronic Acid 2% + B5 Serum",
      price: 1000,
      category: "Serum",
      skin: ["Dry"],
      img: ordiserumImg,
      link: "https://www.myntra.com/serum-and-gel/theordinary/the-ordinary-hyaluronic-acid-2--b5---30ml/33135568/buy"
    },

    {
      id: 20,
      name: "Beauty Of Joseon Glow Deep Serum",
      price: 980,
      category: "Serum",
      skin: ["Dry","Combination","Normal","Oily"],
      img: beautyserumImg,
      link: "https://beautybarn.in/product/glow-deep-serum-rice-alpha-arbutin-renewed-30ml?srsltid=AfmBOoqqqoHO2f3m_N_aUDJxb7wE4wKhbg9xpYjOYnUwvP16TLfFNoHu"
    },

    {
      id: 21,
      name: "COSRX Advanced Snail 96 Mucin Power Essence",
      price: 870,
      category: "Serum",
      skin: ["Dry","Combination","Normal","Oily"],
      img: cosrxserumImg,
      link: "https://www.myntra.com/serum-and-gel/cosrx/cosrx-advanced-snail-96-mucin-power-essence-with-96-snail-mucin-for-all-skin-types-100ml/17228304/buy"
    },

    {
      id: 22,
      name: "L’Oréal Paris Revitalift 1.5% Hyaluronic Acid Serum",
      price: 343,
      category: "Serum",
      skin: ["Dry","Combination","Normal","Oily"],
      img: lorealserumImg,
      link: "https://www.amazon.in/LOr%C3%A9al-Paris-Revitalift-HYALURONIC-SERUM/dp/B08QSTTSNH?th=1"
    },

    {
      id: 23,
      name: "Dr. Sheth’s Argireline & Copper Peptide B’TOX Serum",
      price: 1124,
      category: "Serum",
      skin: ["Dry","Combination","Normal","Oily"],
      img: drshethserumImg,
      link: "https://www.drsheths.com/products/argireline-copper-peptide-b-tox-serum?srsltid=AfmBOoqgvQ2pxzcGMXKmGwxtZ8Ll7igpkOkCGCb_ZLOST4NZVXW88q7r"
    },

    {
      id: 24,
      name: "Indus Valley Complete Pigmentation Serum",
      price: 505,
      category: "Serum",
      skin: ["Dry","Combination","Oily"],
      img: indusserumImg,
      link: "https://www.myntra.com/serum-and-gel/indus%2bvalley/indus-valley-brightening-depigmentation-elixir-hydrating-face-serum---20-ml/34787071/buy?utm_source=dms_google&utm_medium=dms_pmax_cpc&utm_campaign=dms_google_pmax_cpc_Myntra_BPC_Top_100_D2C_Brands_SOK_FB_NEW_CAT_PNL&keyword=&matchtype=&target=&placement=&gad_source=1&gad_campaignid=23121439122&gbraid=0AAAAADoxBh4GymDIBAZH54ngqraBM0RQo&gclid=Cj0KCQiAvOjKBhC9ARIsAFvz5lhChQSr2elBz39i7M-9ud7b4tm7XO_jWL6mqK07DYOtd3VuS4mHqOkaArlPEALw_wcB"
    },

    {
      id: 25,
      name: "La Roche-Posay Mela B3 Anti-Dark Spot Serum",
      price: 3300,
      category: "Serum",
      skin: ["Dry","Combination","Oily"],
      img: laroacheserumImg,
      link: "https://www.nykaa.com/la-roche-posay-mela-b3-serum-for-anti-dark-spots-pigmented-skin-with-melasyl-10percent-niacinamide/p/23326357"
    },

    {
      id: 26,
      name: "Actium Plus Acti-C Serum",
      price: 2000,
      category: "Serum",
      skin: ["Dry","Combination","Oily","Normal"],
      img: actiumserumImg,
      link: "https://iberiaskinbrands.in/products/actium-plus-acti-c-serum-30ml?srsltid=AfmBOorRC-_v_66T7M7-3Z6R7XupkwCdOuPG87uTeB-q01687KJj-z31"
    },

    {
      id: 27,
      name: "Strawberry Bright 10% Niacinamide Face Serum",
      price: 599,
      category: "Serum",
      skin: ["Dry","Combination","Oily","Normal"],
      img: dotserumImg,
      link: "https://www.dotandkey.com/products/10-niacinamide-strawberry-brightening-face-serum"
    },

    {
      id: 28,
      name: "10% Vitamin C + E Face Serum with 5% Niacinamide",
      price: 695,
      category: "Serum",
      skin: ["Dry","Combination","Oily","Normal"],
      img: dotkeyserumImg,
      link: "https://www.dotandkey.com/products/dot-key-10-vitamin-c-e-5-niacinamide-serum-for-glowing-skin-beginner-friendly"
    },

    /*Moisturizer*/
    {
      id:1,
      name: "Simple Kind To Skin Hydrating Light Moisturiser ",
      price: 199,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: simplemoistImg,
      link: "https://www.myntra.com/day-cream/simple/simple-hydrating-light-moisturiser-with-pro-vitamin-b5--e-for-12hr-hydration---50-ml/33533750/buy"
    },

    {
      id:2,
      name: "Vitamin C + E Moisturizer for Glowing Skin",
      price: 495,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],    
      img: dotmoistImg,
      link: "https://www.dotandkey.com/products/vitamin-c-e-super-bright-moisturizer?srsltid=AfmBOoqnBzOVbqG-NuAUJXQ4kt2_plhPmNmQzYybgt_Xe25xz0V_8-pZ"
    }, 

    {
      id:3,
      name: "Hydrating Moisturizer with Ceramide",
      price: 445,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: foxtalemoistImg,
      link: "https://foxtale.in/products/ceramide-supercream?variant=FXN-MSZR50"
    },

    {
      id:4,
      name: "Sri Sri Tattva Moisturising Cream", 
      price: 100,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: srimoistImg,
      link: "https://www.srisritattva.com/products/sri-sri-tattva-moisturising-cream"
    },

    {
      id:5,
      name: "Ponds Moisturising Cream",
      price: 242,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: pondsmoistImg,
      link: "https://www.amazon.in/Ponds-Moisturizer-Cera-Hyamino-Ultimate-Smooth/dp/B09Z6T8H41"
    },

    { 
      id:6,
      name: "Re'equil Ceramide & Hyaluronic Acid Moisturiser",
      price: 280, 
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: reequilmoistImg,
      link: "https://www.reequil.com/products/ceramide-hyaluronic-acid-moisturiser-for-normal-to-dry-skin?gad_source=1&gad_campaignid=20651538170&gbraid=0AAAAAC_HUHDWCl2INO_lY7raShCcJe4Zf&gclid=Cj0KCQiAvOjKBhC9ARIsAFvz5lgIC4oqdWRkCz0Pkb-1HtwjwpzY49-bU1MSNyw9N05qkRT7OYZikVwaAqsEEALw_wcB"
    },

    {
      id:7,
      name: "Beetroot Hydraful Moisturizer with Beetroot & Hyaluronic Acid for Natural Pink Glow",
      price: 449,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: mamamoistImg,
      link: "https://www.bodyshop.com/products/vitamin-e-moisture-cream"
    },

    {
      id:8,
      name: "NIVEA Soft Light Moisturizer",
      price: 323,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: niviamoistImg,
      link: "https://www.amazon.in/Moisturizer-Non-Greasy-Vitamin-Instant-Hydration/dp/B00E96N6O8?th=1"
    },

    {
      id:9,
      name: "5‑in‑1 Radiant Moisturising Face Cream",
      price: 618,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: skinmoistImg,
      link: "https://www.amazon.in/Skin-Story-Moisturising-Wrinkles-Dullness/dp/B0BYS7VXZC"
    },

    {
      id:10,
      name: "Cosderma Hydra Q Moisturizer",
      price: 480,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: cosdermamoistImg,
      link: "https://www.cosderma.org/product-page/cosderma-hydra-q-moist-moisturizing-cream-hyaluronic-acid-hydrating-cream?srsltid=AfmBOoqPVm7v_zVZeJlkU4DSwFAoZ2CmbimdNO5e4idqBOl07bDW5eRq"
    },

    {
      id:11,
      name: "Rainforest Moisturizer",
      price: 1062,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: rainmoistImg,
      link: "https://barenecessities.in/products/rainforest-deep-hydration-vegan-moisturizer-natural-dry-skin?srsltid=AfmBOooVVBYweoXs-CutEVXI4HgF8zQs7ZXYFv0NHb2nEHPjxIueVM5n&variant=45659098874102"
    },

    {
      id:12,
      name: "Clinique Moisture Surge 100H Auto‑Replenishing Hydrator",
      price: 2250,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: cliniquemoistImg,
      link: "https://www.nykaa.com/clinique-moisture-surge-100h-auto-replenishing-hydrator/p/1129289?ptype=product&skuId=1129286&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PLA_Clinique_BrandPaid_171225&gad_source=1&gad_campaignid=23373291002&gbraid=0AAAAADo9oc_6xRSSPJP89VXomov7BXKXv&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdCORlJoGf2jfZfp4dmdJ66o5nMe7Gn6vYh_e_hiNPQAP96xbWotpexoCUJwQAvD_BwE"
    },

    {
      id:13,
      name: "La Roche‑Posay Toleriane Double Repair Face Moisturizer",
      price: 2599,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: lorachemoistImg,
      link: "https://www.myntra.com/day-cream/la+roche+-+posay/la-roche---posay-toleriane-double-repair-face-moisturizer-spf30--100-ml/37908307/buy?utm_source=dms_google&utm_medium=dms_pmax_cpc&utm_campaign=dms_google_pmax_cpc_Myntra_PMax_BPC_Luxury_Brands_SOK_FB_NEW_CAT_PNL&keyword=&matchtype=&target=&placement=&gad_source=1&gad_campaignid=22752376958&gbraid=0AAAAADoxBh63ywVUwcHPVm84aVO9NrmmF&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdIK4w3ATOUjMnBYRl7KMUFxmXQcMT0vlPGvBkN2fIx-XQJ-gsi2-DRoCHwoQAvD_BwE"
    },

    {
      id:14,
      name: "UltraIntense Moisturizer",
      price: 950,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: codemoistImg,
      link: "https://codeskin.in/products/codeskin-ultraintense-moisturizer?srsltid=AfmBOoo44-W_Tg4DfnDzhVAfRP7WHuHfTQLkkihZu0gn_EaF1JdUvc-a"
    },

    {
      id:15,
      name: "Thalgo Redensifying Cream",
      price: 4200,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: thalgomoistImg,
      link: "https://www.nykaa.com/thalgo-nutri-comfort-rich-cream-deeply-nourishes-restores-comfort/p/20653064?root=cav_pd"
    },

    {
      id:16,
      name: "Epique Switzerland Intensive Luminescence Cream",
      price: 4600,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: epiquemoistImg,
      link: "https://www.nykaa.com/epique-switzerland-intensive-luminescence-cream/p/30299?ptype=product&skuId=30297&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PerformanceMaxSkin_Moisturisers_1Day&gad_source=1&gad_campaignid=23395995484&gbraid=0AAAABBsUhjR9b3SWGrCikqU1m5DPAO6SQ&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdIzw92qLWicswQtwLBuDsTDaUmWoU67DRO4CE3xveNnlwXk929gthRoC2SoQAvD_BwE"
    },

    {
      id:17,
      name: "Hydrasheen Skin Moisturizer",
      price: 629,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: hydramoistImg,
      link: "https://www.amazon.in/Hydrasheen-Skin-Moisturizer-Non-Greasy-Healthy-Looking/dp/B0FHQQSDBH"
    },

    {
      id:18,
      name: "Dr. Reddy's Venusia Max Intensive Moisturizing Cream",
      price: 599,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: venumoistImg,
      link: "https://www.amazon.in/Moisturizing-Dermatologist-Recommended-Clinically-Moisturization/dp/B00V7VNA2Q/ref=asc_df_B00V7VNA2Q?mcid=f94a45b638583f0a82677ab292fd70fb&tag=googleshopdes-21&linkCode=df0&hvadid=709855985502&hvpos=&hvnetw=g&hvrand=14060359243634266198&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062279&hvtargid=pla-318315164346&gad_source=1&th=1"
    },

    {
      id:19,
      name: "Brinton Doux 24 Hour Moisturizer Cream",
      price: 367,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: brintonmoistImg,
      link: "https://brintoncare.com/product/doux-24-cream/?srsltid=AfmBOoqP6qyCEGGdA80iGmW67sBchJwQP6u__EXpNjliiR7bJskiTETh"
    },

    {
      id:20,
      name: "Sebamed Moisturizing Cream",
      price: 599,
      category: "Moisturizer",
      skin: ["Oily","Combination","Normal","Dry"],
      img: sebamoistImg,
      link: "https://www.nykaa.com/sebamed-moisturizing-cream/p/4728?ptype=product&skuId=4728&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PerformanceMaxSkin_Moisturisers_1Day&gad_source=1&gad_campaignid=23395995484&gbraid=0AAAABBsUhjR9b3SWGrCikqU1m5DPAO6SQ&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdGIbsBMdPiArK__1K425etiOvHgNzot9nlO9q8QnuEjZqyjr5x3kNxoCJX4QAvD_BwE"
    },

    /*Sunscreen*/
    {
      id: 1,
      name: "The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++ (30g)",
      price: 272,
      category: "Sunscreen",
      skin: ["Oily","Combination","Normal","Dry"],
      img: dermasunImg,
      link: "https://www.amazon.in/Derma-Co-Hyaluronic-Lightweight-white-cast/dp/B0C6M3KHXV?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A15APWRK6P7LBV&th=1"
    },

    {
      id: 2,
      name: "Fixderma Shadow Sunscreen Gel SPF 50+ (40g)",
      price: 293,
      category: "Sunscreen",
      skin: ["Oily","Combination"],
      img: fixdermasunImg,
      link: "https://www.fixderma.com/products/shadow-sunscreen-for-dry-skin-spf-50-cream?variant=42698589470946"
    },

    {
      id: 3,
      name: "Illuminate+ Dewy Sunscreen In-Vivo Tested SPF 50+ PA++++ with Wild Berries & Alpha Arbutin - 30 g",
      price: 299,
      category: "Sunscreen",
      skin: ["Oily","Combination","Normal","Dry"],
      img: aquasunImg,
      link: "https://aqualogica.in/products/illuminate-dewy-sunscreen-spf-50-pa-with-wild-berries-alpha-arbutin-30-g"
    },

    {
      id: 4,
      name: "Lakmé Matte Sunscreen SPF 30 PA++ (50ml)",
      price: 220,
      category: "Sunscreen",
      skin: ["Oily","Normal"],
      img: lakmesunImg,
      link: "https://www.lakmeindia.com/products/lakme-matte-sunscreen-spf-30-pa-niacinamide-uva-b-protection-for-normal-to-oily-skin-50ml?srsltid=AfmBOoqG_8D1_spg7Z5-6g4FVUbTQ49_2W9b3WrF__GJT4aiCCd_Xjrn"
    },

    {
      id: 5,
      name: "Lotus Herbals Safe Sun UV Screen Matte Gel SPF 50 PA+++ (30g)",
      price: 224,
      category: "Sunscreen",
      skin: ["Oily","Normal"],
      img: lotussunImg,
      link: "https://www.amazon.in/Lotus-Herbals-Comfrey-Vanilla-Extract/dp/B0859X9L33?th=1"
    },

    {
      id: 6,
      name: "POND’S Sun Miracle SPF 50 PA+++ Crème Gel (50g)",
      price: 305,
      category: "Sunscreen",
      skin: ["Oily","Combination","Normal","Dry"],
      img: pondssunImg,
      link: "https://www.nykaa.com/ponds-serum-boost-sunscreen-gel-spf-50/p/9897346?skuId=9897340"
    },

    {
      id: 7,
      name: "Lacto Calamine Face Lotion + SPF 30 PA+++ (120ml)",
      price: 279,
      category: "Sunscreen",
      skin: ["Oily"],
      img: lactosunImg,
      link: "https://www.nykaa.com/lacto-calamine-face-lotion-with-spf-30/p/12419140"
    },

    {
      id: 8,
      name: "Earth Rhythm Glow Surge Sunscreen Spray SPF 50 (100ml)",
      price: 314,
      category: "Sunscreen",
      skin: ["Dry"],
      img: earthsunImg,
      link: "https://earthrhythm.com/products/glow-surge-sunscreen-spray-spf-50?variant=43376904306732&currency=INR&campaignid=14232232761&adgroupid=160799074694&keyword=earth%20rhythm&device=c&utm_source=google&utm_medium=cpc&utm_campaign=&gad_source=1&gad_campaignid=14232232761&gbraid=0AAAAACNpes8wFs7TZNJUVfrIwRDZVZS5N&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdGce5paOyPZKxe22weyTg7AsyPJaA3dEmi3scMnTJMyuyeB_dG5G_BoCXoIQAvD_BwE"
    },

    {
      id: 9,
      name: "SunScoop Brightening Cream Sunscreen SPF 50 PA+++ (45g)",
      price: 175,
      category: "Sunscreen",
      skin: ["Oily","Combination","Normal","Dry"],
      img: scoopsunImg,
      link: "https://www.nykaa.com/sunscoop-daily-spf-50-sunscreen-cream/p/10450402?ptype=product&skuId=10450402&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PLA_TopSearchedSKUs_L3&gad_source=1&gad_campaignid=23199923409&gbraid=0AAAAADo9oc8cwCFwMEEH2hRr-pF7q-aEh&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdJsACoNqvb1Y8gZPjyh9Tc7a4Ttj9p0WRGDaFqS48c6rDZGsXXIKlxoCL4EQAvD_BwE"
    },

    {
      id: 10,
      name: "Streax Invisible Matte Gel Sunscreen SPF 50 PA+++ (50ml)",
      price: 270,
      category: "Sunscreen",
      skin: ["Oily","Combination","Normal","Dry"],
      img: streaxsunImg,
      link: "https://www.nykaa.com/streax-invisible-matte-gel-sunscreen-spf-50-pa/p/19555165"
    },

    {
      id: 11,
      name: "Garnier Super UV Cooling Water Gel Sunscreen SPF 50 PA++++ (30ml)",
      price: 229,
      category: "Sunscreen",
      skin: ["Oily","Combination","Dry"],
      img: garniersunImg,
      link: "https://www.garnier.in/about-our-brands/skin-naturals/super-uv-cooling-water-gel-sunscreen"
    },

    {
      id: 12,
      name: "Neutrogena Ultra Sheer Dry Touch SPF 50+ PA++++ (30g)",
      price: 281,
      category: "Sunscreen",
      skin: ["Oily","Combination"],
      img: neutrosunImg,
      link: "https://www.amazon.in/Neutrogena-Sunscreen-Spectrum-resistant-Sensitive/dp/B00G7RTYT8?th=1"
    },
  ];

  const budgetFilter = (price) => {
    if (budgetRange === "Low") return price <= 300;
    if (budgetRange === "Mid") return price > 300 && price <= 600;
    if (budgetRange === "High") return price > 600 && price <= 1000;
    if (budgetRange === "Ultra") return price > 1000;
    return true;
  };

    const filteredProducts = products.filter((p) => {
    const categoryMatch = p.category === activeTab;
    const skinMatch = skinType === "All" || p.skin.includes(skinType);
    const budgetMatch = budgetFilter(p.price);
    return categoryMatch && skinMatch && budgetMatch;
  });

  return (
    <div className="shop-page">
      <div className="shop-card">
        <div className="shop-header">
          <button className="shop-back" onClick={() => navigate(-1)}>
            <IoArrowBack />
          </button>
          <h2>Shop</h2>
        </div>

        <div className="shop-tabs">
            {["Cleanser", "Serum", "Moisturizer", "Sunscreen"].map((tab) => (
            <button
              key={tab}
              className={`shop-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="budget-chips">
          {[
            { label: "All", key: "All" },
            { label: "₹0-300", key: "Low" },
            { label: "₹300-600", key: "Mid" },
            { label: "₹600-1000", key: "High" },
            { label: "₹1000+", key: "Ultra" }
          ].map((b) => (
            <button
              key={b.key}
              className={`budget-chip ${budgetRange === b.key ? "active" : ""}`}
              onClick={() => setBudgetRange(b.key)}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div className="skin-chips">
          {["All","Dry","Oily","Combination","Normal"].map((type) => (
            <button
              key={type}
              className={`skin-chip ${skinType === type ? "active" : ""}`}
              onClick={() => setSkinType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="shop-products">
          {filteredProducts.map((item) => (
            <div className="shop-product-card" key={`${item.category}-${item.id}`}>
              <div className="shop-img-box">
                <img src={item.img} alt={item.name} />
              </div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <button onClick={() => window.open(item.link, "_blank")}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
