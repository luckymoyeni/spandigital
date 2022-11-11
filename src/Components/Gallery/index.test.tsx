import axios from "axios";
import nock from "nock";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";
import { Gallery } from ".";

axios.defaults.adapter = require("axios/lib/adapters/http");
axios.defaults.baseURL = "https://api.unsplash.com/";

test("can fetch topics", async () => {
  const scope = nock("https://api.unsplash.com/")
    .get("/nature/photos")
    .reply(200, {
      "0": {
        id: "Bn-DjrcBrwo",
        slug: "athletics",
        title: "Athletics",
        description:
          "This category celebrates action in the every day — from the tough gym workouts, to tense basketball games, to the extreme heights of heliskiing. Get up close and personal with the raw emotions of the athlete, the frenzy of the court crowd, and the danger of challenging outdoor pursuits.",
        published_at: "2020-04-15T16:00:29Z",
        updated_at: "2022-11-06T21:19:25Z",
        starts_at: "2020-04-15T00:00:00Z",
        ends_at: null,
        only_submissions_after: "2021-10-31T12:00:00Z",
        visibility: "featured",
        featured: true,
        total_photos: 2327,
        current_user_contributions: [],
        total_current_user_submissions: null,
        links: {
          self: "https://api.unsplash.com/topics/athletics",
          html: "https://unsplash.com/t/athletics",
          photos: "https://api.unsplash.com/topics/athletics/photos",
        },
        status: "open",
        owners: [
          {
            id: "QV5S1rtoUJ0",
            updated_at: "2022-11-08T08:09:46Z",
            username: "unsplash",
            name: "Unsplash",
            first_name: "Unsplash",
            last_name: null,
            twitter_username: "unsplash",
            portfolio_url: "https://unsplash.com",
            bio: "Behind the scenes of the team building the internet’s open library of freely useable visuals.",
            location: "Montreal, Canada",
            links: {
              self: "https://api.unsplash.com/users/unsplash",
              html: "https://unsplash.com/@unsplash",
              photos: "https://api.unsplash.com/users/unsplash/photos",
              likes: "https://api.unsplash.com/users/unsplash/likes",
              portfolio: "https://api.unsplash.com/users/unsplash/portfolio",
              following: "https://api.unsplash.com/users/unsplash/following",
              followers: "https://api.unsplash.com/users/unsplash/followers",
            },
            profile_image: {
              small:
                "https://images.unsplash.com/profile-1544707963613-16baf868f301?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              medium:
                "https://images.unsplash.com/profile-1544707963613-16baf868f301?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              large:
                "https://images.unsplash.com/profile-1544707963613-16baf868f301?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
            },
            instagram_username: "unsplash",
            total_collections: 8,
            total_likes: 16072,
            total_photos: 29,
            accepted_tos: true,
            for_hire: false,
            social: {
              instagram_username: "unsplash",
              portfolio_url: "https://unsplash.com",
              twitter_username: "unsplash",
              paypal_email: null,
            },
          },
        ],
        cover_photo: {
          id: "TOr7rQc8rGQ",
          created_at: "2022-11-06T08:58:47Z",
          updated_at: "2022-11-11T10:39:54Z",
          promoted_at: null,
          width: 3878,
          height: 5815,
          color: "#404040",
          blur_hash: "LABDWp~qWBj[4nRjt7WB%Mt7t7xu",
          description: null,
          alt_description: null,
          urls: {
            raw: "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3",
            full: "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
            regular:
              "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
            small:
              "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
            thumb:
              "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667725045016-2cab82a2596c",
          },
          links: {
            self: "https://api.unsplash.com/photos/TOr7rQc8rGQ",
            html: "https://unsplash.com/photos/TOr7rQc8rGQ",
            download: "https://unsplash.com/photos/TOr7rQc8rGQ/download",
            download_location:
              "https://api.unsplash.com/photos/TOr7rQc8rGQ/download",
          },
          likes: 5,
          liked_by_user: false,
          current_user_collections: [],
          sponsorship: null,
          topic_submissions: {
            athletics: {
              status: "approved",
              approved_on: "2022-11-06T21:19:04Z",
            },
          },
          user: {
            id: "gbU3HJYjN44",
            updated_at: "2022-11-11T16:17:11Z",
            username: "artistic_frames",
            name: "ARTISTIC FRAMES",
            first_name: "ARTISTIC",
            last_name: "FRAMES",
            twitter_username: null,
            portfolio_url: null,
            bio: "The best photo you will take is the one you will take tomorrow 📸",
            location: "Egypt",
            links: {
              self: "https://api.unsplash.com/users/artistic_frames",
              html: "https://unsplash.com/@artistic_frames",
              photos: "https://api.unsplash.com/users/artistic_frames/photos",
              likes: "https://api.unsplash.com/users/artistic_frames/likes",
              portfolio:
                "https://api.unsplash.com/users/artistic_frames/portfolio",
              following:
                "https://api.unsplash.com/users/artistic_frames/following",
              followers:
                "https://api.unsplash.com/users/artistic_frames/followers",
            },
            profile_image: {
              small:
                "https://images.unsplash.com/profile-1649642370352-5d2b1b9bdffbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              medium:
                "https://images.unsplash.com/profile-1649642370352-5d2b1b9bdffbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              large:
                "https://images.unsplash.com/profile-1649642370352-5d2b1b9bdffbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
            },
            instagram_username: "itsme3omar",
            total_collections: 0,
            total_likes: 129,
            total_photos: 146,
            accepted_tos: true,
            for_hire: true,
            social: {
              instagram_username: "itsme3omar",
              portfolio_url: null,
              twitter_username: null,
              paypal_email: null,
            },
          },
        },
        preview_photos: [
          {
            id: "TOr7rQc8rGQ",
            created_at: "2022-11-06T08:58:47Z",
            updated_at: "2022-11-11T10:39:54Z",
            blur_hash: "LABDWp~qWBj[4nRjt7WB%Mt7t7xu",
            urls: {
              raw: "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1667725045016-2cab82a2596c?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667725045016-2cab82a2596c",
            },
          },
          {
            id: "-ktMlFrD0Z4",
            created_at: "2022-11-06T08:58:47Z",
            updated_at: "2022-11-11T05:32:27Z",
            blur_hash: "LA9Qjl?b4-D$~q%MIUM_ITR%t7t7",
            urls: {
              raw: "https://images.unsplash.com/photo-1667725050234-f38c2a54725d?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1667725050234-f38c2a54725d?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1667725050234-f38c2a54725d?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1667725050234-f38c2a54725d?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1667725050234-f38c2a54725d?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667725050234-f38c2a54725d",
            },
          },
          {
            id: "YEB54QNBMWQ",
            created_at: "2022-11-03T19:08:32Z",
            updated_at: "2022-11-11T13:49:37Z",
            blur_hash: "LXMi+PkW~U~T?bR+t6bIIps.IVIV",
            urls: {
              raw: "https://images.unsplash.com/photo-1667502245522-a4d20b454918?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1667502245522-a4d20b454918?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1667502245522-a4d20b454918?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1667502245522-a4d20b454918?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1667502245522-a4d20b454918?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667502245522-a4d20b454918",
            },
          },
          {
            id: "W3DoBK_f-x4",
            created_at: "2022-11-03T17:38:38Z",
            updated_at: "2022-11-11T10:39:50Z",
            blur_hash: "LMCGS+00%MRjj[ofRjt79F%Mj[Rj",
            urls: {
              raw: "https://images.unsplash.com/photo-1667496778461-04968698f7c8?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1667496778461-04968698f7c8?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1667496778461-04968698f7c8?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1667496778461-04968698f7c8?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1667496778461-04968698f7c8?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667496778461-04968698f7c8",
            },
          },
        ],
      },
    });

  expect(typeof scope).toBe("object");
});

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

test("no Topic", () => {
  render(
    <QueryClientProvider client={client}>
      <Gallery isOpen={true} topic={""} />{" "}
    </QueryClientProvider>
  );
  const linkElementText = screen.getByText("Please choose a topic");
  expect(linkElementText).toBeInTheDocument();
});

test("with Topic", () => {
  render(
    <QueryClientProvider client={client}>
      <Gallery isOpen={true} topic={"nature"} />{" "}
    </QueryClientProvider>
  );
  const linkElementText = screen.getByText("Loading images ...");
  expect(linkElementText).toBeInTheDocument();
});
