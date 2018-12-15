var friends = [
    {
        name: "Gorbachev",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F59%2FRIAN_archive_850809_General_Secretary_of_the_CPSU_CC_M._Gorbachev_%2528close-up%2529.jpg%2F220px-RIAN_archive_850809_General_Secretary_of_the_CPSU_CC_M._Gorbachev_%2528close-up%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMikhail_Gorbachev&docid=VDmX4usRL9UGHM&tbnid=ETXvUxjyOWne_M%3A&vet=10ahUKEwiolebH8qDfAhUPhuAKHZ2mCDUQMwhMKAAwAA..i&w=220&h=301&bih=743&biw=1536&q=Mikhail%20Gorbachev%20ussr&ved=0ahUKEwiolebH8qDfAhUPhuAKHZ2mCDUQMwhMKAAwAA&iact=mrc&uact=8",
        scorces: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        name: "Lenin",
        photo: "data:image/jpeg;base64,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",
        scores: [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        name: "Stalin",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FBPWFE2%2Fjoseph-stalin-general-secretary-of-the-communist-party-of-the-soviet-BPWFE2.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo-joseph-stalin-general-secretary-of-the-communist-party-of-the-soviet-31293754.html&docid=nfGFD02veHosKM&tbnid=ZqXdZRpEq_QLcM%3A&vet=10ahUKEwiRwNmu9KDfAhUnh-AKHbCzCd0QMwhQKAQwBA..i&w=956&h=1390&bih=735&biw=767&q=Joseph%20Stalin%20ussr&ved=0ahUKEwiRwNmu9KDfAhUnh-AKHbCzCd0QMwhQKAQwBA&iact=mrc&uact=8",
        scores: [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        name: "Khrushchev",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FEK38AR%2Fussr-nikita-khrushchev-first-secretary-of-the-central-committee-of-EK38AR.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo-ussr-nikita-khrushchev-first-secretary-of-the-central-committee-of-80592367.html&docid=ppn0YfX1KB2OEM&tbnid=jpILe8TQDa1NlM%3A&vet=10ahUKEwikmojm9KDfAhWumOAKHectDbAQMwhQKAQwBA..i&w=938&h=1390&bih=735&biw=767&q=Nikita%20Khrushchev%20ussr&ved=0ahUKEwikmojm9KDfAhWumOAKHectDbAQMwhQKAQwBA&iact=mrc&uact=8",
        scores: [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },

];

module.export = friends;