const SAMPLE_DATA = [
    {
        "rel_path": "correct/correct_high_margin/sample_04_idx1032",
        "info": {
            "chosen_audios": [
                "chosen_00.wav",
                "chosen_01.wav",
                "chosen_02.wav",
                "chosen_03.wav",
                "chosen_04.wav",
                "chosen_05.wav",
                "chosen_06.wav",
                "chosen_07.wav"
            ],
            "chosen_score": 2.5,
            "chosen_text": [
                "Cause I have to try it. I have to try it. I have to see if it passes the test. Oh, that's the rationalization. So I need to wear it for a few days first. Okay. Cause you don't know just from trying it on in a dressing room. Uh-huh. You know, but if it passes all the tests, the, the stress test.",
                "Everybody's gonna wanna know what brand. Oh, I, we, you know, we don't wanna get told. We can't do that, right?  I'm not being paid by",
                "I'm not being paid by these people to talk about this.",
                "The other thing that was amazing is no laptop.",
                "No laptop.",
                "So, this book, So, this book,  You wrote on your phone and on probably a tablet like this. Yeah. With a little external keyboard to it. Exactly.",
                "Yeah. I got rid of the laptop in 2019. Mm-hmm. And again, it's a big decision, hop of faith. Four years, no laptop. You know, am I gonna be able to do it? And you, surprising. Mm-hmm.  I, I actually considered just writing it on my phone just for the story, but I was like, I don't, I'm not gonna be that crazy.",
                "Yeah. And doing the podcast where you have to kind of deal with larger files and stuff like that. You were still able to do it on a tablet. Yeah."
            ],
            "processed_flag": true,
            "reason": "The synthesized version fails to shift its tone or create a progressive effect when uttering repeated consecutive words, thus sounding quite unnatural.",
            "rejected_audios": [
                "rejected_00.wav",
                "rejected_01.wav",
                "rejected_02.wav",
                "rejected_03.wav",
                "rejected_04.wav",
                "rejected_05.wav",
                "rejected_06.wav",
                "rejected_07.wav"
            ],
            "rejected_score": -0.134765625,
            "rejected_text": [
                "Cause I have to try it. I have to try it. I have to see if it passes the test. Oh, that's the rationalization. So I need to wear it for a few days first. Okay. Cause you don't know just from trying it on in a dressing room. Uh-huh. You know, but if it passes all the tests, the, the stress test.",
                "Everybody's gonna wanna know what brand. Oh, I, we, you know, we don't wanna get told. We can't do that, right?  I'm not being paid by",
                "I'm not being paid by these people to talk about this.",
                "The other thing that was amazing is no laptop.",
                "No laptop.",
                "So, this book, So, this book,  You wrote on your phone and on probably a tablet like this. Yeah. With a little external keyboard to it. Exactly.",
                "Yeah. I got rid of the laptop in 2019. Mm-hmm. And again, it's a big decision, hop of faith. Four years, no laptop. You know, am I gonna be able to do it? And you, surprising. Mm-hmm.  I, I actually considered just writing it on my phone just for the story, but I was like, I don't, I'm not gonna be that crazy.",
                "Yeah. And doing the podcast where you have to kind of deal with larger files and stuff like that. You were still able to do it on a tablet. Yeah."
            ],
            "score_margin": 2.634765625
        }
    },
    {
        "rel_path": "correct/correct_low_margin/sample_09_idx755",
        "info": {
            "chosen_audios": [
                "chosen_00.wav",
                "chosen_01.wav"
            ],
            "chosen_score": 0.00787353515625,
            "chosen_text": [
                "Well,  Information, control, access to the internet, access to any information critical of Scientology. Is, some internet access allowed?  Public Scientologist has no restrictions to their access to the Internet. They're just not allowed to read anything critical of Scientology.  Oh.",
                "Okay, so they're self, they're supposed to self-control what they read or not, and what's the explanation  Is, is it always assumed that anything critical of Scientology is a lie?"
            ],
            "processed_flag": true,
            "reason": "Both exhibit a high degree of consistency in tonal quality and style, featuring a relatively flat intonation pattern and incorporating natural speech disfluencies.",
            "rejected_audios": [
                "rejected_00.wav",
                "rejected_01.wav"
            ],
            "rejected_score": -0.205078125,
            "rejected_text": [
                "Well,  Information, control, access to the internet, access to any information critical of Scientology. Is, some internet access allowed?  Public Scientologist has no restrictions to their access to the Internet. They're just not allowed to read anything critical of Scientology.  Oh.",
                "Okay, so they're self, they're supposed to self-control what they read or not, and what's the explanation  Is, is it always assumed that anything critical of Scientology is a lie?"
            ],
            "score_margin": 0.21295166015625
        }
    },
    {
        "rel_path": "wrong_example/wrong",
        "info": {
            "chosen_audios": [
                "chosen_00.wav",
                "chosen_01.wav"
            ],
            "chosen_score": 0.224609375,
            "chosen_text": [
                "Oh really?!",
                "Yeah. Did you tell someone that I was gay?"
            ],
            "processed_flag": true,
            "reason": "The MELD data annotation exhibits severe text-audio misalignment, while the synthetic data successfully completed the entire natural dialogue.",
            "rejected_audios": [
                "rejected_00.wav",
                "rejected_01.wav",
            ],
            "rejected_score": 0.416015625,
            "rejected_text": [
                "Oh really?!",
                "Yeah. Did you tell someone that I was gay?"
            ],
            "score_margin": -0.19140625
        }
    },
];