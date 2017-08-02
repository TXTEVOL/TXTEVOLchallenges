export class dataProvider {
    constructor() {

    }

    categories = [
        "technology",
        "college",
        "art",
        "video games",
        "fashion",
        "math",
        "educational",
        "sports"
    ];

    public db = [
        {
            "title": "TXT",
            "description": "We inspire young at risk Black and Brown boys to become technology entrepreneurs. These boys are at the highest risk of dropping out of HS and being incarcerated.",
            "category": [
                "technology",
                "educational"
            ],
            "location": "3655 S Grand Ave #220, Los Angeles, CA 90007",
            "website": "http://exploringtech.org",
            "contact": "n/a",
            "favorite": false
        },
        {
            "title": "A Place Called Home",
            "description": "A Place Called Home provides a safe, nurturing environment with proven programs in arts, education, and wellness for the young people in South Central Los Angeles to help them improve their economic conditions and develop healthy, fulfilling and purposeful lives.",
            "category": [
                "educational",
                "art"
            ],
            "location": "2830 S Central Ave, Los Angeles, CA 90011",
            "website": "https://apch.org",
            "contact": "(323) 232-7653",
            "favorite": false
        },
        {
            "title": "Project Fashion",
            "description": "Do you dream of being a designer, stylist, or the next Anna Wintour? Then join us at the Fashion Institute of Design and Merchandising (FiDM) to see what it takes to have a career in fashion. ",
            "category": [
                "fashion"
            ],
            "location": "4556 University Way NE Suite 200 Seattle, WA 98105",
            "website": "https://fashion.experienceamerica.com",
            "contact": "1-800-410-6088",
            "favorite": false
        },
        {
            "title": "Otis College of Art and Design: Summer of Art, College Preparation Program",
            "description": "Four-week, pre-college art & design program designed to develop your artistic and creative skills. Serious young artists seeking to strengthen and enhance their art and design skills, as well as students with limited art training, are invited to participate.",
            "category": [
                "educational",
                "college",
                "art"
            ],
            "location": "9045 Lincoln Blvd Los Angeles, California 90045",
            "website": "https://www.otis.edu/summer-art",
            "contact": "(310) 665–6800",
            "favorite": false
        },
        {
            "title": "Model United Nations Institute at UCLA",
            "description": "At the MUN Institute, students improve their public speaking and communication skills, explore their interest in international affairs, and make friends from around the world.",
            "category": [
                "educational"
            ],
            "location": "n/a",
            "website": "https://www.summer.ucla.edu/institutes/ModelUN",
            "contact": "n/a",
            "favorite": false
        },
        {
            "title": "Teen Counselor in Training Program",
            "description": "The Teen Counselor in Training Program is a leadership program for teens interested in learning new skills and work experience.",
            "category": [
                "educational"
            ],
            "location": "n/a",
            "website": "https://www.teenlife.com/summer-program/camp-expo/",
            "contact": "n/a",
            "favorite": false
        }
    ]

    getCategoryPrograms(category) {
        return this.db.filter(program => {
            return program.category.find(cat => {
                return cat === category;
            });
        })
    }

    async filterItems(searchTerm) {
        await this.db;
        return this.db.filter((program) => {
            return program.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

}