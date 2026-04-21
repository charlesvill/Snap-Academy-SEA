const dataSet = [
  {
    "id": 1,
    "title": "Spaghetti Aglio e Olio",
    "ingredients": [
      "200g spaghetti",
      "4 cloves garlic",
      "1/4 cup olive oil",
      "1 tsp red pepper flakes",
      "Salt",
      "Parsley"
    ],
    "steps": [
      "Boil pasta until al dente",
      "Heat olive oil and sauté garlic",
      "Add red pepper flakes",
      "Toss pasta with oil mixture",
      "Garnish with parsley"
    ],
    "tools": ["pot", "pan", "knife"],
    "metadata": {
      "tags": ["Italian", "pasta"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 450,
      "image": "https://cookingwithayeh.com/wp-content/uploads/2025/02/Spaghetti-Aglio-e-Olio-SQ.jpg"
    }
  },
  {
    "id": 2,
    "title": "Chicken Stir Fry",
    "ingredients": [
      "2 chicken breasts",
      "1 cup broccoli",
      "1 bell pepper",
      "soy sauce",
      "garlic",
      "ginger"
    ],
    "steps": [
      "Slice chicken",
      "Cook chicken in wok",
      "Add vegetables",
      "Add sauce and stir fry"
    ],
    "tools": ["wok", "knife"],
    "metadata": {
      "tags": ["Asian", "quick"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 25,
      "difficulty": "easy",
      "calories": 400,
      "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGBgbGBgYGBcaFxgXGR0dHR0YGhgYHSggGh4lHRobITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0mICI1LTEvLS8tLi03LS8wLTUtNS0vLS0tLS0vLi0tNS0tLS0tLS0tLS0tLS0tLS0tLS8uLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xABCEAACAQIEAwYEAwYFAwMFAAABAhEAAwQSITEFQVEGEyJhcYEykaGxQlLwFCNiwdHhBzNygvFDkqIVk9IWU4Oywv/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAAwEQACAgEEAQMBBgYDAAAAAAAAAQIDEQQSITFBE1FhIhQycaHw8QUjgZGxwTM00f/aAAwDAQACEQMRAD8AtadJrYNWeleZaIZOi1gFeKtemoQ1K1hr016TtUIaA1jCtstYBUIeAV6q14V1mt6hDxlrBW4rV1FUQ9rYVgrIqEPa9NYBWNVkKo7R4Y2cQgAPxsg6EMQyb8t6tLgrzZWdwAOXTy3pf7UYKSLoEmOmxAMfc/Otuw/GhfD2wfgM7jVTp+iOhpSK2zwGk9yyH2tjcAT1rrZcBSNo/nXU24Mj5cq53EJB59QK3jBg7hdfKud/nrymvRdG07CuOKfTz/rVvoiIOIuMRlCkneR+ta14bYDtmYAgbSPtNEcOpEzUVr5ztHyoe3DTZrPgl9xb/KvyFZUQM5/6Y+Y/rWVvK9jJsBWEV7XkgUwYNjOleKkV4jg61vNQh4RWOtZWOahDya9JrytZqEPRW0VqjVtUIerWxryDXpB6VRDAa2Fc8tdBUIe1q1bTXhqyEbGWO8tsvy9eX1oH2L4d3N28QyhSf8sbq34tI22j2pjDRQLtDZa3++TRf+oRoR/EI386FYsPcEjzwMNy7IYIQWAj0JGlcuHXc1sGZb8WkEHzB50FwfFixFsty105dfTzorwi2FzQ2afTl6etYTyyukbYu7DaenyrW7ezwOXXmOtbYkTXC8Dbtk6Ak9Ky88lklroQEsf7Dmah2/3pzBiAOe3vUPiGIUgE8xDDqKzgt/R1/CI389I+VVuzLBeOMhDv7X5mPnWVCZ7QMSulZV5/AgVmuV4SCKj3L8AEbHby6j2P0Irj+2UzkGS7KQNfvXRWqEl+a72XmoQkitWrBWuIvLbHjOvJRuf6VHwQ3GtaXCq6uwX13+VCcTxVjovgHlufU0Ndp1+9DdvsbUA5d4tbX4QWPU6Cotzjbn4QF9KEk15nrG9s3sQS/brh3Y1ul9jzPzqAjVMsVpMy0TLTnqamW7h61FtCpdsVtGGd1ausTXNRXZRVkOToY2mot25oZHqDsR6UTUVrdsBtxUIIOPQ4c57cmyZkASbHn5p9q3t8Xe0yshLZozDMChX8yxrJ60W41wi8k3LPi6rz+XP0pSsXVJIthUYnxWXMKW1k22/A0/hOlLTg1zEKpKXfY/2cYt2yChMlQdtdRtQ7tDimW3bCHLBE+vT+dAuCcQNr92pY5d1YZbg13K8weq6eldOP8eRnVOoUny35daqUk4lKLTJJBKyWltNBHOpeHw7ZTEA7nQxA9d/XzpYPE4uqAchYqFPlT7w+4pQNoZ0EVVaUiS4IKYC6QD/P+1ZU8336D5/2rKLtRncyDhCGL2oIB1Wdwdj9wf8AbQ8A7UUsJ41OuaTm25yJPPkNKjcTw2W5/q1+pH8q1W8xyVLhmuHeiWDQSco1bfzNDbCEwBqTUnG4oW17tT4vxMOX8IrecIrGTvjeIhPCmrc25D060u4jG66mTzNaYnFACBvQ0tS87AsYhI4gRNRLuMkwKEcc4gLFouxE6QswTJifSlfA9ob96+ttGCDVvCNYA+HWZnYeZoMrMBq693RYFu4TuVWN5I+1etj8Op8d0fMAfWuPZrgQbxMAXYnU6ktExJ8hFQu0uBW4CqQtxPhkbr+Qnl5UlHX5eFH8w0qIp4bDWG47h2R3tlXW3GYgzE8h1NRr3bewiFgOWkqRr5zSPgsDiboFm3bFlVhrhb4V1MEkfESc0VrjcAcOSLrS0xAGhESDr1HKiPWT5CfZqljnIZ/+vbiElLpbmQQGH129qYuzX+IHffGq7wSNIPoaRreJsuYyhABJnLGhA0J3329a1x2Ktp/ljMx/LpoOtY010ocNv+rCX0RkvpSL1w2LVhIqZbYGqY4J2nuG0MpIg6y0Qegjep1rtTi0cHNpDTJzCZ0gcopz7fBS2tMU+wzcd2UW6K3ApE4B2udmVbsEHntTxbuA07GakuBOUXHs6RSz2q7JJiQXSEu9eTeTf13pnFZVsyUXir92y3dYi3mKHTMSHXzS4NRWz8QV41D6QReEXI6C9b1+YNWn2s7NJi7f5bq/A/8AI9RVJ8Swdyy7W3XKymCP1yocoJm1NoJvZw7MGbvUy66EXVPnKHP8xTrwrtPYRMhv29NgTlMQNw8a1VNu80TBFdP2pzWVDHRbkmWw3aaxJ/fWP/cX+tZVSZ26CsqYkVwX3gQAzCZ1kEdTCgeZOlacdWbi/wCn7k1FsYo96FJ+HxN6xA+5P/bUxrgZ2ut8C7eZ2A/nWq1iCMyeZHC6/cp/Gw/7V/qaWcbiNdKl8Ux5ZiSdTQW49DnPIaETwtXuKvrZWWgsdh08zUXi3E0wlrvX1c6InMmq1xPGMRddmzFi24jQDyHKgt4DxplNZRP7Q4xr5Y/ESxgbmBA0Hl/OpFpBay37aqjakpMZdNBB8xP1opw7ALbwoaDmdBnuarBYE5ddwJjTnSnw+2tzFW7dwEDPLDUZkXUgdcwED19aVjLfnD4RlRdfLLuV2t4HDXBC3IS4RvBfxT1jWofa7h1u4bV9XKH4mg65WHwnlvBmOVLfaDtel3x22GVrctrBGQaqo8oOokailniHa9rpCOTbRl00PiUfDlMc438xSfpTlJ7Y4X+Mcfmb47cuyweHWzbXOz5hcVMogxKEw3rJkD0qD2u7ONfsko7C8Z1PUGZnbLA5mRRGziR+xYa6FEGxaYaazkB5c6UeJdq3ZGTN8UzvMfy/5qVva2kuUOqrdBewlYrD3sP/AJhzZgwXWBI5gic0dPMVww2JuyJ2PQ6ydqP8btkiyrCJXMuYdRIYHmCDp6VzwvZVwEZrmViZy6ZVA2mdST5V0FZHb9eMiNs9snFNkrh2JVLRtMBqBkaSMrAjU8mESNdt6m3nuqBJAVho/Q9SN9p02qBb4TdvF7OUeAF1YkCNQN1nQ9KnHHPhmtlg+YuAokFTMQFO0+f96WnHL47GIWyx1wMfCMLdu3FtIhuAgHvBog/1Hl1qwOAcRgtYuMM9s5Z6gbEetAxxthbgMtsncqB+LqTrMztvQ6/glssc7XM7+KXbUjk0aQNNIFEr1Tq75BvTOz4LRW6K3Vpqm7XaN7RJS4WTYgagRuY5infs72gF5Ac4PmPtXRp1MbUKW0SrG8UpdvuzIxFvvbY/eoP+9fy+vT+9M2GxIapFHAHzhct6xz+tbNZFPHb7s8tm93yKAlzfyfcj33+dJuKcAVktEbLWVHzudQNKyoWWxw+2w+LW5cbM/qdl9unoOVT+N4nIBaH4dW83P9Nq74G13ea4dkE+rcvr9qXMXeLEk7kyaq2XguuPOSNcM61xDqoa4/woJPnHKurGh3HLwDWrG4LLn8wSJHypZvHIyll4EPjN+/i7huMjAH/LB0AXlE7+vOjP+HnCLiX3u30y2wsQd5O2mx2mi3+IfEFt3zkRQQJnmTtv7UP7K8W722iCSzs2efhWCQPmoHzpCVs5wbS4Ok1FYXXwMvHcQWARTruPMfyFKXErPeGXExoCoj/it8RxcD900yjNlaZ0J2B+fzqTxLAg2rK5iCwLtEZiSBlGu0CdKWgnF5MX2pRSXOf3BOE4HaKJ4D4bpdmJMvosW+gUESeZzAaVrx7EpcYZlBgg7DSOQ9hEVObiadyygZMsqATyXLEnqZJJ86AcavXLlm0TaRAAyhwIa4o2LDmRqM3Pn5sRUrJpyfXR0tPGinSbpRWZ9/gT8d2nuZFyOSi+ErpA6GPf6Uq4niDSWgnrTf2Z7J2MXZa473LShgvhGaSI18ehE9OYPSvOK8Iw1ggWZLKAxuMQTmPLux4diNPnRK501y24yzib57dqfQE4fculwzHWyAQGkqoA0Guw8WgFHsNhL2MPgbKCBL+fPLPtS7jL7XECtd0HIActppg7IcQ+C01zckeBSWMAkBddZIAmDHtRZxT+proTTzLMxp7N2rOCbugoud8VVzu8jQGegk6edGuOcEGUldYO0a/XoaS+HYlkU3LloNdhoYOxIJI/BBGXLI9WGtHU7Ts1treJi25Iyss5guoIYH4TtB/RRsrbe7PJ1K74ZUF+4oY+9estlLHKx3POOR896mcS409xVIJmADrrAgct9P5US4pcS8rB0V4UsCreMkDlI0PKkjD40ZhO31otcdyzgK5YeENB4YwGeySS7EheROhIA/3D51yw+MuKYHgJ3IJUnyIB1150OscfNm3MAkyYP5p3+X2rThFw3WBB+KSZ/MefLmaNCtLMpCl9zT2ou3shjzctqxOseKNp606WmkVTXZrFtaX49zGWNdSB/en/ALL9oO9buSpzATPIgU7Tqa5vYnyIzqljd4DPHuGjEWHtnmND0YbH51QWNwrF2QiGU5WH8cwB8/tX0YKrPt9wlbWJF8LCMGdz1dFyj6GfamGCQnDFWU8Gnh026aV7Ui1wNGUM0hiATtud6yscGuSz+0bZbaoOZzH20FJ9w00cffMzHpoPQafcGlW6d6xb2ErXB5aaJc7KJpVvXwbouO5UZiSQATpqAAepgTymaYOK3ctnIPifWP4aWeI21yakacpE66UpZZFcZ59hipZkZi7S4261xnzWrKZrkbsWkIs+oJJ8vOklLtzD31uWG1Bkc99gRz++1HuEcRXD94R4s/gdeWQmR4fxQw389N68sYS3l74GXaeUKvoKDCXor4OlTR9ssVfTz/ZHS9jreJd+8Vg8wy6KoEaFHH4tDowAOmo1NNXZfBLjMTdsMSO7RSjA6wGyuCsaEEQd9wdoqtr9zLeJ6j7VYv8AhrhI7++gIzoUGX8q+O4R02RR/qPSrlXHhtCGp0ionLD4i32Q+2nZVGvB7DB1DRcbPIHX0I6eRr3F8OtXlTNcGRV03ABX8JPnFb8VuW0wS3WktdNxiqxlBkC2vXr9dopVx3GlexbS3bW0VJLFWck/EIbM2XaD4QNSPMEcaZzUXnGOvJVmqcVtxzxka8V2gRbZRVTUhfBEKoOi5Y0EjX/VtpSNxfFeEjYsW1B15CPb0oXculvCPhHl9TWYXDm5etoNSSB+vamatNGrMm/kElOaTYx4vswy4e1cW7HeSYcaBRzEAkmfbenPsjgLLWjlRe8QABxGcqBvPm06dK4dqcN3aWLcAFUUxG+kgmTrudIHvyScHxW7axa3UKq6XMyovhEDdYGysJB9TS6Ur4YbC3RhX0iyMFhrV4HFE54LBre2W4p1HlGhG/I0tdqeKWsxXV7xRAzE6krzygRMgmP4ztVg4mxaS0TZUDvj3pI2OcCDHKenrVacewlq1iGvXSdIyAHdtS0iNd+XnS2msTucH46AWt4XyL+J4vctgkaFucbyPSNqiYPCOyhxtMGN/TXT/iinEcQt97j6BcugP5QOnWa79jbAKXc5AFskAkFpZhp4RvEfWuqpKMW8cklZNRTIjYRWAUZtpPKJO2umoj1kV0w9oIMzPCrrI5zsR9v+a64p4djmzEsZgEj4uRPLSY8vWpOEwL3mQqiGDqDOU+3sPl71U2tnIGEpSl7slcP4yS63Y8QGmYmdomPOrR7DXJC3jAMEHzmkLGi2vgdAhAmYPzBj6Ub7IY8wVBkagHkY1mg6SUN2Ug097WGi5bNyRQXttw7vsKw5qVb1AILD3Ej3qP2d4kXEHcUxXEDKQeYIrq9rIs+CjL/GrgZgtuVkweonQ1lFrthbZNvLOQldvy6fyrKxn4LGniV3QmaX3+9EMZuR0mouGslriqNyaDN5DxWELvaW6FuyOQA+VBhbS6GKghzqQTOn8PlTF2ww0OEKRqZbSSfUctdqBpxpLJVbdtDJKmdXbKdSY2BPLy8q5NjVjbguV+uTowq2pbmKnFcKyNDq6t0YR6GQdamYMhMOBJ8LNv8APTy1pw4kjXk71tN/CeWsRrSNi3DZ0Zj1XXSVnSKJGbsWxrob0s1pLfWXPDWAdi7RuNIEqPODMcvSrg7E3hcwndquS2LCd5cUAKmae8A6u8KAPMnrVR4bFBZcxPTrpvPLlTP2O7VXe4Th4VEUvmzTlnMTJYnc6/bpTUlJR66OXbcrrm5Pt8k/jC5mSwmiuwDbZdNdeQMClIYVDjVQf5YuInqSRI89PvTP29fuwmHt2mVpMsIOYgEaMDtuZqD2bwC91b0m5bcuw6kHMCT6fak6W669z/DH+/8AQT+IPdDdFcLyBO1HAns4lltjwPJWToOqyen2iuHDMI9krek94hlY+H3P4pH3qyUW5iXJtKJCQ0kbNzj8W3LyoHxfhndyhbN6afSrhq5emoTXPn5K09GYKTZAxvakYpx3p7u4ITWO7jYHMT4Rtvt1o32ewVi5hBAJuvc1eVlSpPhXfSRPnoar/F4TPeyoCx8uZpw7Ig4MscQoysvxaHIwIymBqNJE1u+qEa/oeH3grM7J7ZdLyWMbwFqbhCwI5cqqztShv4u4QRkQhE10hdz7tP0pwxvDcPdTvfi13BkGaC3uHLANibi6i5oJU8hlmdqT0z2crs26a4SW6Qvtw0BG+AiNSYkR0qZ2Es2CXe5DW1OYhjCkxBnyFCuP4die7tnwkS0mIMkR9J9664HhrLZC5xzIgaa/fWuhJfy+ZcsDdBzeIoKcZvpcuZwqW0YxbXKfEw2aBqRvrHOPSTatm1D2VL6gs40EwCQT5achFLmGxLG33jWWDgjLdzAFYMFcpnNMEcory7xrGC2VDKLY1gLG5n3Ou/lWvSajtT/uwVcVGSlzx8Fk3b6XEDMPFzB5TXDgLKt6F2J+tLXYbD/tZd8VcdwIW2DAExqSBGmo60wWRat3YVclxCSFA0KAfEWneYGx50tGSrtab67H5Q9SvKRYPZfDHOx5TTrbGlJXYbiGd2XkwzDqPKniu1BrbwceaafIu4jhSF2OUasT9ayjpSsrRkr3iKHOelRsBeC3rZOwYT6TU/ijTtQMmGB86WkNR5RG7YWrl64xzZfPSN/18qVuBcJW5jrFtmAgjQEHNAkwfMyY318qK8fulWbMSQNhv7AUp4FL74hRZbu73iZZI6HqCDoTuOtIwqlXnLH1L1eIroaePpluNBMEQRSHxdfEcvXTzn0qwbnD3Z+6vuCzOoVlVtdACxMaAavEa7aToF4pwBbVm5dktcUTGkAjXSKW08o1vl5yGuzOOEsYOFrs1h7QW5eLaQTluBWBBU5SpHnqQeg9Vi9iBaxedYCT4eQAGgHy+9dsdje+u95dJGcgx0PrpFOnZw8PKNbuhWZjJW4PaQdvlTc5yrWZ5eUchYfSNONYu4wRHXKUUac/EJ19iKEm5csL3wTwNIk7aHkdxzHz9m3jXZ7DWbLXrVzLbUDwklhy0BMke1JmJS/iEDs2awvhGZtAABsPIRpStKXjhfr8z0Vmsoek2YXyvd/v5GjsfhL37PdvMTLANbuKZmTO+wjbykUD7TJfFzRxdUkw0qpA5ZtNdOf0pp4PabD8PtXLDazcHj+FkYjSD8EgbClDFXBdN25cuKuWTlzQToYKg76j9TUX/M2sYQpDEqk+skT/AA2tW7mMLXWCkKzBPzkcvbpuZqxry27wYjDZVMjUT6xI2pVwHBf2a3h8UygX7cOuacpDD4Wj10863TtwjTbv5rLq0ggmN5ho1joYiDUvcr5Zr6XD+MAPqojz2wPxRb+ClsO/7vNJtkTljyOoHpRbsZxcXgzEw5Hig/C6zBjow59VijGJwf7UVv5SuGZTDHTOY2UNBInnzG1VwmJ/Zb/e2lWQWyhgSpkRDAHUayBtIHpRqY+tW4zWJe//AKc6+W5IK8btlbzZiDEAR+WND77+te2sZbFonvD3gI/d5CQV5tnnT0ipnAsK9wLcYFrsQZAKlVlthOaDDR5e4JcW4XYtWQxhmtuPCAIZXhtD8RJzAGZ3GxFE+lYUuwsdRPHCAWOT9xbZWVszGEVgbggnVk3CmTDbVG4naeyAt4AFrYcAEGASRBjZtNRy0qXiO8JtrqWtr3doAQcmZ3MAakgu2+tDOK2Wv3UBzGFVQq89T8yYreI5x4Dq2UobscjR2DxSi2VLquXMwmBMxIBO5gaDy86YFwiXEe6IZ8xObnPIfrpS3a4NbwgF2+DACnullgpM6Mx9J109a97K8SZ7xCtIc6rPhmd4+dJyr3Tc4eQ1V6lHHhFi9g7pS6obdpB99asyq97MYSbobkDNWCK7VSxHByrXmWTw15Ud8QAT61lEBiXxS1lJHmaWOJ45LerH9dacOI3BdRbq7XUVx/uGo9jNIXaTDAEMRIH2pW3djgbp2t8gbt1xPJlyEnvFnNyA8jXT/B/AG5iLt8n/AClAWeZuSJmdIVSP91GOJ9ncNatBrikq4zqrGVWeWmwnruZ86Hdle0GH4fcxCnRLhtsIH4kzSoA6ht/Kk5W7k44eR+MXCPBYV3hRFzOP8wj4RyBMeGfv9qTO21k2rVzxSCp0gAa+8zTXwbtNbvqWRgTMDxQAN9JIjbn0pE7f8U71GXUZoiQduuu8iklXFzWPcJGcknn2Kvw66gnzHvRC8ykLmBG2hEbc9eVeNw4qocA6cj0NG8Lgu+tEwCVjTqPvNdWy1LDEYUuUdq7J+C40Wsrby2wF5hFzn/U8SdhQyzb7zEi1cuMqNqY3PlroJNR8Fct2L3d4nOiDU5MpbKQSMs+E6lee00UwvA2xAe+qse7AyJqGu5m2EAmQBMAa0Bwkm3nh9P29jp6zUU26THCksPHyHL3FrC4I2ldRkuOAmYTG8wTJ9aV+E2Rfa5I2Gk85nrTGvAbF0hs1xfDkIULIvzBYrEohjaMwgzprW/H+DG0WK27gvrbUW1TUPA1DAg7cgNfqKBFQryovLfn5EK7rHCMWuEOl22LmHthdZQDWPhjSR6VXPbjhHd3bRClwi6ScwUTOUTyBnTYVaF6wbaIBsABH/FA+MG0JZ0DtlhQdpA2I50npbHGTY3fBThgjdn+1v7Rh7lu9lW5aTMupANtQdgT8Q6Deq44vYUKCPxDMJPiIbxCRuDlYTy8NeXMUxzsfCSTOXQQTsAOUxpUjF4gXQjIp70RlAAyRpMz7mfPU6V1q47ZZOHZFppDb2D7O3mwlrEi4BcLObakSrKJTxEayfFry00NQeP3BFx7iZGtmCkgywEDTp4hT7weLHCsJm0YWrZ31kgMfvSN25KXg+IU5CoJMwQw5KJ566fqFPvajk6PpfycoAYXEkImKa5kuh4tgMQ5YncRtlImdNNN4qfh7xt3TdQeNphmg5ZO4G078udIwsEjMza8tZNOXZhu+WJGZAfCeZ8qb1EMLgHRKMsxYSw1tTcAu5risSXE6kkRmM7mY9YipnZvg6/tJKgKLRYnLoAdRlHQa7VpZUITcIMKoIHMsTEa85imnsxw9u628dxiT6kyaDp4ycseEGvlFRWB37I4b93mPMmmWofDbGRFUchXvFsWLVm5cJgKpP0rsJYWDlN5YrYvtEi3HBI0Zh8jWVVF7H2mYszPmYktG0nUx715WckLB7D43vsGbZ+Kw5H/47niU/wDdmHyrXjvDZUwKWew3EhZxiqxhLoNt+muqt7MB8zVj4qzup5aUKLUol1S4Kqv4hwO4ua2zojc0PIelKvaTD3IVCATpEbxpvVn8e4KGnoaAX+z0oWks439PKlXU1ZuQ/wCvmtxYjcFxly0XCHK2WGlQYBI1XMIHLanHiFlbnd96xa4LckgDLMx8NA+I8MZG71RJAhh+ZRr8648H4y9wtaKSFDMjSFZc0DKxPxrOvlry2HdS5PdExTeoPEgti+CC4oYuFDkJbGsu0gQNNhIn1o/2X7IjB3H766GLKVyx+7UweupIPPQeXSt+MX2S4CjsSVUurKVyvBlIPxZfzbamKtD/AA67UnGW2F4AXrRGYj8aHQOB1kQR6HnAzOqcYd5XkPG+M31yV92z7PHD3M8mC0oYlWA+IAtoWWRp504W8Gvc2z4rjMRlDMsCPwTzZdVBEaGDuZNf4h27LhVuHMVHgUanMx6chMac6WuC8ROHZVxCv3VwZfh0RgQs9eUnaCo0NYslKVW1PlfmL31tzUsdhXieMuYa6htW1NsqrjYMG3OVhptA5zG9DeL3hdXMytcRmEmfHbECBG5UEeep58iXEL+HYojOlwMQLYUxD6yEynaPbXzrZcFkJZEIyxmU7CdiT+EeZ0pFT645CuDbYL412+vKqIFQfxTvy2/vSvxXtNfcaiRzgwdemlZ2wvK+Zcq5lJgqQQDzggwRQMq2VAG1gbjcGunRRBRTxyDstsjw2d863E8KtI/FpoeU+n661zx+JCIFIBbmRAkQBHpTR2a7J4jEIUlUtEksy5WkjQQytB1Eb8qNW+wuGtgNeBZhmk5vi1EaMNAI6azW5XQg8MuFKnW+OffPgJ8J4wuJ4dYMQbSLbZdAJXwz6HLPlNK3FOJi637LZylrhAY7qonr/TzokOz4e2yWLmVJnLI1Y6AHShVvg4wlwXLqznEQRKqWkCYbxbFtJEqBG9LV7N7l79I6FaeIxz0LmOwAtw7RqwUqN9jrO0eHfzqfwy8LLi6pMD4gIn/mo3HMQt3JkkNmYssEEExvpHM7Uc7PcPLqAdjGg8jz6/3pxpuC3dnNtsSubh0G+FBsUynKQsyARE+Z9OvrVs9n8CABA0Ggpd7NcFIgxvoD5czVgYLDBFAHKmKKtqAW2bmd0Wkj/FPGjuVsFsoczcM65F1geZMD0mne64UEnQASa+fu1naAYq++IYzZnLZT/wC7l5/6ec+YozYJHe3i9BlwjlYGUgaRy+leUvvi7xJJvQTyzgR5Ry9Kys8Fkk3YbMu4IYexmrk4bjRiLIcasqrPmjDwt/I+lU9jMLkuMh0gmKfewGNIRCNSue2w6r8QB8t1Fc+i7nPuLxlteQ/irQIoQ1qDNMl+2pAZDKNt5Hmp8xQzEYc081nkaTFfi3DBuo0P6ikm3w97Pfd0Cc0acsu2vUAttz06a2g1vcESDS5x3hLDxJ8xS9kXjgJFRb+orXH8Nugd4ykAg89en3rbhmHxeE/fBHWCDI0IDbSOdM2JYrhoLeO2zFdJOpzjQ9GJNWCLCYzCW76KMzoGZYEean/dIpN6iai049PA5RXFSzkrbG9pUvq955F8KMoElWI02/ByPOm3sFxq1j7Dg2wty0wDicxIYEi5JA3YEHpE86S+2/CkyZ7KhHScyiB4dZ9xSx2axtzDk3bVx0uEhdIyNb3YOCDm1y6e/SiV1QsqbRrU3bJxWPxLJ/xG4NbTD94sKbcERzM+XMgmuXDsT+2YY55L2wQ0GCyiCB5yQPlNJ3FcZcuZf2i4wB1Ck+CdpCjQbbxR/so7YceJZtkaEaMBz8iKXvhtrWO0+A+k3WzaisoF38HIAjxEwB60v4zPaugwSIB9BtTLxrFNdukWFYDX/V9NhQG7ZM6sWedegjl50zp20syJqNHZJ7VH+pav+F+NX9hUZSQrsragQWYsSABMZW/WlTeP4a5cZ7hYqhBgBdlHMkkAfreq6w3a69g7YS3bta6wQ0ggAcm20+9WV2f4kmOwaNcMuRLqshdPw5Z2BA3pa2qe52N/T4+RWyE4y9NcJCXgeKPaZQlk3EV1JY+EMFM8hQ3tZiL+KuqHAtpqyoo0BM/15dTT+bFtbZHQkkqNokAetDL2A70qcp6KI1rdMnuzFBLIQUcPyJ3DezRJBZgRpOni9Ktnsl2aGUMVjp6UQ7P9jgoDXBryHIU5YfDBRArqVwb5kcybS4iaYTChRoKl14BQ3tDxhMLZa6/IaDmTyAowMA9v+KDJ+zKdbnxxvk5j329zVM4jCXLuIcBQXByjKZWzbGw6Zjv5T6UyY7jvfi44B79yFXoCxgew39qncM4ULFpVU5ubNzZjux6zQm2bwAl7M2oEzPP4f5isqXd7NYdmLEXJJJP725uf91e1MkOHFUL2rWI5/A/+pdJ9xB96L9jb/d4nIfhuqCP9Q2/pXexh5N7Ctli+veWv4XA1Hrp/4UKVWFtLg0e2fkV/oftXFb9Ga/EVY0/+sHDX2DAtac+NeY6Ov8Q28wI6QwuFZQ6EOjCVYbEfyPlSpxsC7at31GjqDHSdx7GRQ3gXHbmFuFCM9ptWQn/yXo335+TekufqSqf4oJXLA5vZ8qi3bHlIO4onh7iXU7yy2ZeY/Ep6MOVask0+0HTE7iXAA3iTfpzqLgMY+GUKFIy5ojYhiCQwjrJ0jWPdwv4eheLsA6MsjrzoFlKl2Hha48izxXiZvyDYUwDlloMkfmifpSRY4BdtnSyYnac+h5SBqfarSXgqH4WjyP8AWuzcIvKDkAnkdCPlWFTGuLxn/JLLHY1kQrXZsYlYCFWHKOnMc6n8L7PXVPdu0H8OYcvf50z8Hw+MtswuywOzaSp+kjyqVi+HXLjAy89f7E6VzZwufEMtfPASM51S+mWPlMri7gri33su3eZZ0BgMu2y7H0rTJaRsgUoCTE66jSJOoO9Ordi75u94pysd2OX7GeppiwnYtCJu5Sx6CfvTddNk3h/pj1ev9PEm8v8AuU4eGKzE5xryjlTP2OS7bLW7K5tdCJ3IE6dP6CnzDf4a4YGWdzHIQPrBP1pr4PwSzh0y2rYUczux9WOpo1emnL7/AEVrP4hXKOK/8ALh/Zsv4r2UdVUECR1nej+E4PaQyqievT0ogoranYVxgsJHGnZKTy2YBXoryouP4gloDMRJMKObHeB8q2YOuMxa2lLuYA+/Sqo7UX7mNxJtFsoyE216ZSJJ9c0e1FsfxpsQ4keEN4RyZhMKOoBElttKXsJiVGMuXZ8Nu0FHmXMj6AGsstC+cG2GxAt3CJBMEHSTbYj0NRMHxO7abMrHzB2NE8bgjicXZaY7y5MdEjLJ9RPyrTj3BBZdURzcmQdI8SxMa6jUa+RrODRPHai1ztmefrWUG/8AR38h7isqsEGjjWZWDqfFbaR8x9Nj/wB1FRYV1NxB4Lq94B0J0dfZvvUfE2c4U7T4SDzOsT9R86j9mOJBGOFuaSxNsnk34kP+oajz9a42oSnyvIpFhDs/hWOGu2iNLdw5D/CwmPYz86WuNWspQ+o+VWXh8F3dtvMfU60idqsNCA9H+hBrVKcbYN945CpEbg3ELlpg9tip+46Ecx5Gnjh/G7V7R4tP1/6bf/H3086rnh4M/ajNnauwmbHu/YI3HvyPvUK7YmgmA4tds6K0r+VtV+XL2ij2D4lau/Eptt5ar/UVeDSkRRh6lWJGxqb+xT8JDehrX9mYcjVYNZOtm6fKpKv5CoqIakIKtIoko3kK7K1R0rsorZlnYGtwa5DTeoWJ45h7ejXVnoDJ+Q1qFBQGvHuACSQB1NLjdpw5iwhc+k/2HuRQXi1m/dMXrpUckTxMfKBoPkfWrwyE3tV27SwrLZUu+ViGIPdgjlm5nyFJmA4hcxGJDXHznvF/2q9siAOQk8qYrHZ9UBORLQMy12HdvKJPyn2obc7OAXBdwpfMCpllC2yFO0aFdCeVU0yC1ieKNbuHOIgwRMaTopMEgeQipVoRbZngG40t5E6AeywI9a5cesLcxxIGghiBqM/OT8h7GvOJtmK21+Leeh2Ln02HmaGzZLwD5bj3wNUGW0v8UQB7AlveK7C4gZQQXywZO7GZgDpmJJO2g9uYtZVS0nxt8IPIc2b9az51gw4A8IzSYWf+o3N26qP1yq0Qmf8Ap1lvE1wydTG0nePKsqMUUaG8084MCecDlWVorA2cR4bln8rbHp/SDB+dJHaHCywcAgneOTruR01196ty4gYEESD1pJ7QcNhivy9fwn3Ej1FcnV0elD6evHwLyj5Gbh+I77CWrh1JRSfNgIP1mkvtcP3Nw9GU/UCmbscpGDyHkzgehMx9aAdplBs3Z6D7ihyl92YRdClw/EGjVm6TER5+nl7xS7YTIfWKNYV9IrpVWKcco0iWt3XWifDnINA7vhEiWiOUk/KifDJmZnX29qOi2NOFY0TtXW6mhWEbSiNhiTAE0UyySt010DMef0H9KxcN+YgeW/0Fd0XoG/8A1Hy3qcENVttzb2G/yFc8XCjxMV8gSXPsP1512NzlJPlbH/8AX/FDOO4gpbIAyltAF1uN1g8vWqIKHaHGMQYB/hUsZHUsTI/p5nYLwTh/fNEG6Afht+G0DzzN+L6+lTePYaQoCgqIkE+ADYE/m8h786kcHx4tAK2ZmH4UGRQOp5xHUjaseTXgcMDgwi5CQoH4LQ+hO/2re7dVTlUBCx2UZrhnmeQ95pdu8YZxlBCKT8KCA3uBmPqBHnUvhF9AZ01O/hI9CSDHzNbyZJfFWygALDHmSGePso/451XHHMU6m42YiAVEEjxMdBp0UA+5qy+M6pIjfbSOkmAPPr5VWWPwpu3jMi0hJzH8bEzIHPkB7cmrMslojYEi1bDuYZ9B1AA39h9TU3A28itduDUnQcyfwoP1/fSxhu9u5j8Kjw9FUdP6+nQEkMQZZAgmNLY5ZvxOfIChmzLFogMXMMwzXWH4V/DaX9fcUV4Zw1nYSMpI/wDbt9B0Y/y8q84VgM8aEoradbtzrPQH7eVN+EwgQEEzBm4fzNGiD6fSiJGWyGmGAAC2JAEAxy5VlEmt3iZzIJ5a6eVZWsFHcVCxuFDieY+3619qk16DWLIKcXFlNA7h3gDA6A6+h/X8qVu0CFrV2B+E/SmzGrAn9fr+lLJbNnWdwfnyrhSbT9N+ChUsWAyAV6rZdDXXhlwMOhnUdDzHp08qI4nhhYSBr+tK1RY6p4fTNEQQRpU/h6ZmyLOY6AAfy5660LweHBcI9xEMwRuR7CrI4Pw63bHgVzIBJAyyf9R1+tdqHJbZ7w3hbAfvIUesH+dF7agCFDEfwiB8zqfnWqsF/Ih8zmatGJb87/8Ago/r9aKZOlq9BIlV/hXxNPmfptyrsy88pPm50+X9qjWDGgYL/DbEn5/2rq45lQB1uNMe2v8AKoQ595m0zFvK2IH/AHf3oTxucpAULO6LrcYHcE/hnr050Ue8CDqzj+Hwp8/70OxXiXIsRrITbb8Vzlr01qMguX1Og0kzrHhWIzN6KIUUONoQABvJCN+KN7tw7x0Hp7Fbqbyc2oBjQEg+G2nkCJJ/QhAgl/xa+KN7jcran8omCfXqaGzSIV1PFlALM2s/m/iJHw2x0G9TcOCoBBLDZY0Z2PJfyoPLp89mtiGJMz/mFeZG1q35cvfqdCWCmeh66ZbSAagRzGk+w6CoiETDYu7mYEllBAbUgM5GlpB7EluSgneBQHimJz3CshiTBjYkaEAA6AbHkNEGxKSe0fHlUZLOgGZZGjH8wB5MSBnflAUSR4QvD4UG4/xMAAANl5Ko5SOQ2HqajkRIk3T+ETkBgx8V1+g/hH9dhRrhHBXuEltJjOw2RfyL5/8APSpfA+BMWDPAcjblaT/5framlLlq0qxGUfApOrt+Y9fX3qRj5I2bYPCBIVQAYhF5InU+f/Fde8AAIkqDCD87nTN/f1ND7vF0Ct4s2+dlBP8AsU/T/moicazP4VKgDQnZJiFA5sf6VsyGP2Q/iu689efOsqKMI5/6XzbX386yrITXrSdDXtZVFmmMUZD7Un4f/NrKyuFq/wDsFCvaGXGOBoD3kj0MinvDKMgrKypAtdC12pvtauI1s5SZkwNYiN6dezt9ryqbjFtOsfQRXtZXU0/3SMLuAi+EAewrzAjOJeT7mOfLasrKZXRRpxK8yZQpygnlHStr9oAK0SepknfzrKyrIc8D41zP4jpvtqJ22qJb8ZYNqFCwOWp1kDQ+9e1lUQCXTNrvPxSVB6DTYbD2qJjVCZsojKLajyBOsevXesrKyyzljxlYgaBQmUchJgx5xz3qO11hg3IJBfFd2xBg92GtqFEbaM23MzuAaysqiCOpzXtfz5Y2AVTAUAaAAcqL4O4QWcfECACdYmJiaysrBaCWB4nea+to3GyHMSoMSRG8an3po4eo7l7n45Izc4zRA6e1ZWVuHRGS3tBSwAgJadlHINrr5n1qPhLYBt6fgZ/92ni9dTWVlaZQRTEOQDmbbqa8rKyiGT//2Q=="
    }
  },
  {
    "id": 3,
    "title": "Avocado Toast",
    "ingredients": [
      "2 slices bread",
      "1 avocado",
      "Salt",
      "Pepper",
      "Lemon juice"
    ],
    "steps": [
      "Toast bread",
      "Mash avocado",
      "Spread on toast",
      "Season to taste"
    ],
    "tools": ["toaster", "fork"],
    "metadata": {
      "tags": ["breakfast", "healthy"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 10,
      "difficulty": "easy",
      "calories": 300,
      "image": "https://thesaltypot.com/wp-content/uploads/2019/02/Avocado-Toast09.jpg"
    }
  },
  {
    "id": 4,
    "title": "Beef Tacos",
    "ingredients": [
      "ground beef",
      "taco shells",
      "lettuce",
      "cheese",
      "tomato",
      "taco seasoning"
    ],
    "steps": ["Cook beef with seasoning", "Prepare toppings", "Assemble tacos"],
    "tools": ["pan"],
    "metadata": {
      "tags": ["Mexican"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 500,
      "image": "https://tamingofthespoon.com/wp-content/uploads/2025/03/Braised-Beef-Shank-Tacos-R6-5.jpg"
    }
  },
  {
    "id": 5,
    "title": "Vegetable Curry",
    "ingredients": [
      "mixed vegetables",
      "coconut milk",
      "curry paste",
      "onion",
      "garlic"
    ],
    "steps": [
      "Sauté onion and garlic",
      "Add curry paste",
      "Add vegetables and coconut milk",
      "Simmer"
    ],
    "tools": ["pot"],
    "metadata": {
      "tags": ["Indian", "vegan"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 30,
      "difficulty": "medium",
      "calories": 350,
      "image": "https://woonheng.com/wp-content/uploads/2021/04/Curry-Vegetable-Bowl-2.jpg"
    }
  },
  {
    "id": 6,
    "title": "Pancakes",
    "ingredients": ["flour", "milk", "egg", "baking powder", "sugar"],
    "steps": [
      "Mix ingredients",
      "Pour batter on griddle",
      "Flip when bubbles form"
    ],
    "tools": ["bowl", "pan"],
    "metadata": {
      "tags": ["breakfast"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 350,
      "image": "https://i.etsystatic.com/64258734/r/il/ee97c3/7847184680/il_794xN.7847184680_oynh.jpg"
    }
  },
  {
    "id": 7,
    "title": "Grilled Salmon",
    "ingredients": ["salmon fillet", "lemon", "olive oil", "salt", "pepper"],
    "steps": ["Season salmon", "Grill for 8-10 minutes", "Serve with lemon"],
    "tools": ["grill"],
    "metadata": {
      "tags": ["seafood"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 15,
      "difficulty": "easy",
      "calories": 450,
      "image": "https://whatmollymade.com/wp-content/uploads/2025/06/grilled-salmon-4.jpg"
    }
  },
  {
    "id": 8,
    "title": "Caesar Salad",
    "ingredients": [
      "romaine lettuce",
      "croutons",
      "parmesan",
      "caesar dressing"
    ],
    "steps": ["Chop lettuce", "Add toppings", "Toss with dressing"],
    "tools": ["bowl"],
    "metadata": {
      "tags": ["salad"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 10,
      "difficulty": "easy",
      "calories": 250,
      "image": "https://www.noracooks.com/wp-content/uploads/2022/06/vegan-caesar-salad-4.jpg"
    }
  },
  {
    "id": 9,
    "title": "Tomato Soup",
    "ingredients": ["tomatoes", "onion", "garlic", "broth"],
    "steps": ["Cook ingredients", "Blend", "Simmer"],
    "tools": ["pot", "blender"],
    "metadata": {
      "tags": ["soup"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 30,
      "difficulty": "easy",
      "calories": 200,
      "image": "https://i.etsystatic.com/54796013/r/il/6d49df/7590201690/il_794xN.7590201690_chyf.jpg"
    }
  },
  {
    "id": 10,
    "title": "Omelette",
    "ingredients": ["eggs", "cheese", "vegetables"],
    "steps": ["Beat eggs", "Cook in pan", "Add fillings", "Fold"],
    "tools": ["pan"],
    "metadata": {
      "tags": ["breakfast"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 10,
      "difficulty": "easy",
      "calories": 300,
      "image": "https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1-500x500.jpg"
    }
  },
  {
    "id": 11,
    "title": "Burger",
    "ingredients": ["ground beef", "bun", "lettuce", "cheese"],
    "steps": ["Form patty", "Grill", "Assemble"],
    "tools": ["grill"],
    "metadata": {
      "tags": ["American"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 700,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IVpqe16u-gx426F_k52l-UUzQnpJU_QS_ZK7jSKX9jLueiNB5STkSLb4THJc-WId6O77j9XQcZeOzDTrR89ZkAGBTQj-vJEnEU6Gzg&s=10"
    }
  },
  {
    "id": 12,
    "title": "Margherita Pizza",
    "ingredients": ["pizza dough", "tomato sauce", "mozzarella", "basil"],
    "steps": ["Prepare dough", "Add toppings", "Bake"],
    "tools": ["oven"],
    "metadata": {
      "tags": ["Italian"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 25,
      "difficulty": "medium",
      "calories": 600,
      "image": "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080"
    }
  },
  {
    "id": 13,
    "title": "Greek Salad",
    "ingredients": ["cucumber", "tomato", "feta", "olives"],
    "steps": ["Chop ingredients", "Mix"],
    "tools": ["bowl"],
    "metadata": {
      "tags": ["Mediterranean"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 10,
      "difficulty": "easy",
      "calories": 250,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tCg5ijAzSkAX4tY0DjuVRDXGC98A1vE5Yt1fYpJdkNZB-wlHnTCEUkMK8i1iDtBziHGF6hpUrBHdcJet_63GsMOBN-sNKaEVJWMJChA&s=10"
    }
  },
  {
    "id": 14,
    "title": "Pad Thai",
    "ingredients": ["rice noodles", "shrimp", "egg", "peanuts"],
    "steps": ["Cook noodles", "Stir fry ingredients", "Combine"],
    "tools": ["wok"],
    "metadata": {
      "tags": ["Thai"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 30,
      "difficulty": "medium",
      "calories": 550,
      "image": "https://pinchmegood.com/wp-content/uploads/2025/07/Vegetarian-Pad-Thai-11.jpg"
    }
  },
  {
    "id": 15,
    "title": "Fried Rice",
    "ingredients": ["rice", "egg", "vegetables", "soy sauce"],
    "steps": ["Cook rice", "Stir fry everything"],
    "tools": ["wok"],
    "metadata": {
      "tags": ["Asian"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 400,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8QmiadI5lnyWzJDg_kikB7dkVkR4jcnk0wwAy4bZoQw3FwbDxCRdZOSuOgx0x8iPcdUTR1t-LNO2OXxhb0N5tnvKIb3OYiPbixYT6w&s=10"
    }
  },
  {
    "id": 16,
    "title": "Lentil Soup",
    "ingredients": ["lentils", "carrot", "celery", "onion"],
    "steps": ["Cook ingredients", "Simmer"],
    "tools": ["pot"],
    "metadata": {
      "tags": ["vegan"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 40,
      "difficulty": "easy",
      "calories": 300,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePJ5xqlOgb-0SSeEt4DJKsYpURMzDBpyu23dJmbgmBU3HeaAV36asGeAY0UwsQWP0ovd9asBEQqPMNxWNCuIZC_CB1H6PxIffV_PX3A&s=10"
    }
  },
  {
    "id": 17,
    "title": "Smoothie Bowl",
    "ingredients": ["banana", "berries", "granola"],
    "steps": ["Blend fruit", "Add toppings"],
    "tools": ["blender"],
    "metadata": {
      "tags": ["healthy"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 5,
      "difficulty": "easy",
      "calories": 250,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHBoNXqSdoy8cIIQ-6H8RAoi4CSMEVev7SbexJ0pL1rWNaO9Gg5oImh856gSK3M3TfanxLlNKRBsUMJcVTroXwdk5-pikT5KTD0yqnA&s=10"
    }
  },
  {
    "id": 18,
    "title": "Roast Chicken",
    "ingredients": ["whole chicken", "herbs", "butter"],
    "steps": ["Season chicken", "Roast"],
    "tools": ["oven"],
    "metadata": {
      "tags": ["dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 90,
      "difficulty": "medium",
      "calories": 600,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZv5MBbwuPkBLhNx47GJbO2Iyqp9OmDGcWqMi-Zm3xXnHP-xg7ygxgDdCXq5iAUHxvEH0aa3B_WZnxH-NOoiNY7HfR2K7VvGQPh_gLZx4&s=10"
    }
  },
  {
    "id": 19,
    "title": "Mac and Cheese",
    "ingredients": ["pasta", "cheese", "milk"],
    "steps": ["Cook pasta", "Make cheese sauce", "Combine"],
    "tools": ["pot"],
    "metadata": {
      "tags": ["comfort food"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 25,
      "difficulty": "easy",
      "calories": 650,
      "image": "https://www.seriouseats.com/thmb/RjSCYLZ7fw6XgYyNN8eEojOnLNs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210214-stovetop-mac-cheese-reshoot-vicky-wasik-9-0760b642ca704cf8b2c5121a363a60a2.jpg"
    }
  },
  {
    "id": 20,
    "title": "Falafel",
    "ingredients": ["chickpeas", "herbs", "spices"],
    "steps": ["Blend ingredients", "Form balls", "Fry"],
    "tools": ["food processor", "pan"],
    "metadata": {
      "tags": ["Middle Eastern"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 30,
      "difficulty": "medium",
      "calories": 350,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUIDqF5JlbRp-i36yym4yu_a8YAVpmy16iqCJTZL3L4XxoxG8bI3YMRwCQ3gLyT8BucDTh4Fx3nj2Zf10tXGakZQYg4IPfmRB7715ng&s=10"
    }
  },
  {
    "id": 21,
    "title": "Chocolate Chip Cookies",
    "ingredients": ["flour", "sugar", "chocolate chips"],
    "steps": ["Mix ingredients", "Bake"],
    "tools": ["oven"],
    "metadata": {
      "tags": ["dessert"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 200,
      "image": "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg"
    }
  },
  {
    "id": 22,
    "title": "Quinoa Salad",
    "ingredients": ["quinoa", "vegetables", "lemon"],
    "steps": ["Cook quinoa", "Mix ingredients"],
    "tools": ["pot"],
    "metadata": {
      "tags": ["healthy"],
      "vegan": true,
      "vegetarian": true,
      "gluten_free": true,
      "cook_time_minutes": 25,
      "difficulty": "easy",
      "calories": 300,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkgWQfaBu9Fp8WzllAzodvVYQi5mScx2maQ&s"
    }
  },
  {
    "id": 23,
    "title": "Shrimp Scampi",
    "ingredients": ["shrimp", "garlic", "butter", "lemon"],
    "steps": ["Cook shrimp", "Add sauce"],
    "tools": ["pan"],
    "metadata": {
      "tags": ["seafood"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 15,
      "difficulty": "easy",
      "calories": 400,
      "image": "https://www.allrecipes.com/thmb/gGiZlDOs_cqp65nB23gsVlcmBI0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-19508-shrimp-scampi-VAT-hero-01-4x3-f5a1c9cadca542919285caa8dcf5d135.jpg"
    }
  },
  {
    "id": 24,
    "title": "Stuffed Peppers",
    "ingredients": ["bell peppers", "rice", "ground meat"],
    "steps": ["Stuff peppers", "Bake"],
    "tools": ["oven"],
    "metadata": {
      "tags": ["dinner"],
      "vegan": false,
      "vegetarian": false,
      "gluten_free": true,
      "cook_time_minutes": 45,
      "difficulty": "medium",
      "calories": 450,
      "image": "https://embed.widencdn.net/img/beef/t9bwp7fitq/360x360px/Stuffed%20Peppers%20-%20NCBA%20Beef%20Aug%20202431717.jpg?keep=c&u=7fueml"
    }
  },
  {
    "id": 25,
    "title": "Egg Fried Rice (Vegetarian)",
    "ingredients": ["rice", "egg", "vegetables", "soy sauce"],
    "steps": ["Cook rice", "Stir fry ingredients", "Combine"],
    "tools": ["wok"],
    "metadata": {
      "tags": ["Asian", "vegetarian"],
      "vegan": false,
      "vegetarian": true,
      "gluten_free": false,
      "cook_time_minutes": 20,
      "difficulty": "easy",
      "calories": 380,
      "image": "https://christieathome.com/wp-content/uploads/2022/06/Egg-Fried-Rice-3.jpg"
    }
  }
];

export default dataSet;
