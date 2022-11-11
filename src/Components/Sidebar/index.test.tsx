import { render, screen } from "@testing-library/react";
import axios from "axios";
import nock from "nock";
import { QueryClient, QueryClientProvider } from "react-query";
import { Sidebar } from "./index";
axios.defaults.adapter = require("axios/lib/adapters/http");
axios.defaults.baseURL = "https://api.unsplash.com/";

test("fetch topics", async () => {
  const scope = nock("https://api.unsplash.com/")
    .get("/topics")
    .reply(200, {
      data: [
        {
          id: "qPYsDzvJOYc",
          slug: "experimental",
          title: "Experimental",
          description:
            "Photography has the ability to challenge perspectives and reimagine how we portray the world around us. This category explores unlikely textures, new formats and intriguing subject matter to push creativity forward.\r\n",
          published_at: "2020-04-06T14:20:23Z",
          updated_at: "2022-11-07T12:43:31Z",
          starts_at: "2020-04-15T00:00:00Z",
          ends_at: null,
          only_submissions_after: "2021-10-31T12:00:00Z",
          visibility: "featured",
          featured: true,
          total_photos: 6909,
          current_user_contributions: [],
          total_current_user_submissions: null,
          links: {
            self: "https://api.unsplash.com/topics/experimental",
            html: "https://unsplash.com/t/experimental",
            photos: "https://api.unsplash.com/topics/experimental/photos",
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
            id: "h_w4UKF6tQU",
            created_at: "2022-11-05T01:09:32Z",
            updated_at: "2022-11-11T00:33:12Z",
            promoted_at: null,
            width: 3951,
            height: 5926,
            color: "#a6a68c",
            blur_hash: "L9J*YG8^SKO@-..8-;xZxvM|Rj%M",
            description: null,
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667610515790-73eaab18462c",
            },
            links: {
              self: "https://api.unsplash.com/photos/h_w4UKF6tQU",
              html: "https://unsplash.com/photos/h_w4UKF6tQU",
              download: "https://unsplash.com/photos/h_w4UKF6tQU/download",
              download_location:
                "https://api.unsplash.com/photos/h_w4UKF6tQU/download",
            },
            likes: 15,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              experimental: {
                status: "approved",
                approved_on: "2022-11-07T12:43:25Z",
              },
            },
            user: {
              id: "an8MUg-lGrQ",
              updated_at: "2022-11-11T16:57:12Z",
              username: "mathildelangevin",
              name: "Mathilde Langevin",
              first_name: "Mathilde",
              last_name: "Langevin",
              twitter_username: "mathildlangevin",
              portfolio_url: "https://mathilde.ca/",
              bio: "Photographer & Contributor",
              location: "Montréal",
              links: {
                self: "https://api.unsplash.com/users/mathildelangevin",
                html: "https://unsplash.com/es/@mathildelangevin",
                photos:
                  "https://api.unsplash.com/users/mathildelangevin/photos",
                likes: "https://api.unsplash.com/users/mathildelangevin/likes",
                portfolio:
                  "https://api.unsplash.com/users/mathildelangevin/portfolio",
                following:
                  "https://api.unsplash.com/users/mathildelangevin/following",
                followers:
                  "https://api.unsplash.com/users/mathildelangevin/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1601327292565-cc4c02215d36image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1601327292565-cc4c02215d36image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1601327292565-cc4c02215d36image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "mathildlangevin",
              total_collections: 5,
              total_likes: 254,
              total_photos: 241,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "mathildlangevin",
                portfolio_url: "https://mathilde.ca/",
                twitter_username: "mathildlangevin",
                paypal_email: null,
              },
            },
          },
          preview_photos: [
            {
              id: "h_w4UKF6tQU",
              created_at: "2022-11-05T01:09:32Z",
              updated_at: "2022-11-11T00:33:12Z",
              blur_hash: "L9J*YG8^SKO@-..8-;xZxvM|Rj%M",
              urls: {
                raw: "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667610515790-73eaab18462c?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667610515790-73eaab18462c",
              },
            },
            {
              id: "xbu6-zm5VU0",
              created_at: "2022-11-01T21:32:51Z",
              updated_at: "2022-11-11T04:19:31Z",
              blur_hash: "LK8}GPx]I:bH.Tt7jEoeo~adoJW;",
              urls: {
                raw: "https://images.unsplash.com/photo-1667338336416-2fbc1c4424ba?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667338336416-2fbc1c4424ba?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667338336416-2fbc1c4424ba?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667338336416-2fbc1c4424ba?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667338336416-2fbc1c4424ba?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667338336416-2fbc1c4424ba",
              },
            },
            {
              id: "g6JE3qFkqtA",
              created_at: "2022-11-03T11:22:56Z",
              updated_at: "2022-11-07T16:05:53Z",
              blur_hash: "LeRL;8x]e.aJo#aJozbI*0Rjf+kW",
              urls: {
                raw: "https://plus.unsplash.com/premium_photo-1667423957592-2224a89ed80b?ixlib=rb-4.0.3",
                full: "https://plus.unsplash.com/premium_photo-1667423957592-2224a89ed80b?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://plus.unsplash.com/premium_photo-1667423957592-2224a89ed80b?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://plus.unsplash.com/premium_photo-1667423957592-2224a89ed80b?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://plus.unsplash.com/premium_photo-1667423957592-2224a89ed80b?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1667423957592-2224a89ed80b",
              },
            },
            {
              id: "iK0WjaADbDI",
              created_at: "2022-11-02T19:35:55Z",
              updated_at: "2022-11-11T00:33:08Z",
              blur_hash: "LbC%Q,ofM{kCV@WXWBWB8waeozj[",
              urls: {
                raw: "https://images.unsplash.com/photo-1667417576353-15a009abe4e3?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667417576353-15a009abe4e3?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667417576353-15a009abe4e3?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667417576353-15a009abe4e3?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667417576353-15a009abe4e3?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667417576353-15a009abe4e3",
              },
            },
          ],
        },
        {
          id: "CDwuwXJAbEw",
          slug: "3d-renders",
          title: "3D Renders",
          description:
            "The Unsplash community continues to push the boundaries of creativity through 3D Renders. From abstract worlds to photo-realistic interiors, this category celebrates exciting 3-dimensional images designed in the software of your choice and rendered into JPEG images.\r\n",
          published_at: "2021-06-16T18:09:53Z",
          updated_at: "2022-11-11T06:36:16Z",
          starts_at: "2021-06-16T00:00:00Z",
          ends_at: null,
          only_submissions_after: "2021-10-31T12:00:00Z",
          visibility: "featured",
          featured: true,
          total_photos: 3585,
          current_user_contributions: [],
          total_current_user_submissions: null,
          links: {
            self: "https://api.unsplash.com/topics/3d-renders",
            html: "https://unsplash.com/t/3d-renders",
            photos: "https://api.unsplash.com/topics/3d-renders/photos",
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
            id: "3QJeztLc2tw",
            created_at: "2022-11-05T03:22:42Z",
            updated_at: "2022-11-10T20:32:19Z",
            promoted_at: null,
            width: 3228,
            height: 3511,
            color: "#8c8ca6",
            blur_hash: "LaIE-WIUfmWB?wRjWAay%LWBWAWV",
            description: "A mobile in pastels. Video here: bit.ly/3htYlEq",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667618168458-c02e2ea07e85",
            },
            links: {
              self: "https://api.unsplash.com/photos/3QJeztLc2tw",
              html: "https://unsplash.com/photos/3QJeztLc2tw",
              download: "https://unsplash.com/photos/3QJeztLc2tw/download",
              download_location:
                "https://api.unsplash.com/photos/3QJeztLc2tw/download",
            },
            likes: 21,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              "3d-renders": {
                status: "approved",
                approved_on: "2022-11-06T20:04:44Z",
              },
            },
            user: {
              id: "ztl0dpKQ7IA",
              updated_at: "2022-11-11T15:13:03Z",
              username: "gregbollella",
              name: "Greg Bollella",
              first_name: "Greg",
              last_name: "Bollella",
              twitter_username: "GregBollella",
              portfolio_url: "https://bollella.myportfolio.com/",
              bio: "30+ years as a Ph.D. software architect and now I've found a new passion creating 3d art. Having a blast. ",
              location: "California, USA",
              links: {
                self: "https://api.unsplash.com/users/gregbollella",
                html: "https://unsplash.com/@gregbollella",
                photos: "https://api.unsplash.com/users/gregbollella/photos",
                likes: "https://api.unsplash.com/users/gregbollella/likes",
                portfolio:
                  "https://api.unsplash.com/users/gregbollella/portfolio",
                following:
                  "https://api.unsplash.com/users/gregbollella/following",
                followers:
                  "https://api.unsplash.com/users/gregbollella/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1663167384832-1bac7642fdb5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1663167384832-1bac7642fdb5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1663167384832-1bac7642fdb5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "bollella",
              total_collections: 0,
              total_likes: 0,
              total_photos: 13,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: "bollella",
                portfolio_url: "https://bollella.myportfolio.com/",
                twitter_username: "GregBollella",
                paypal_email: null,
              },
            },
          },
          preview_photos: [
            {
              id: "3QJeztLc2tw",
              created_at: "2022-11-05T03:22:42Z",
              updated_at: "2022-11-10T20:32:19Z",
              blur_hash: "LaIE-WIUfmWB?wRjWAay%LWBWAWV",
              urls: {
                raw: "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667618168458-c02e2ea07e85?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667618168458-c02e2ea07e85",
              },
            },
            {
              id: "x_5ofu-xTXM",
              created_at: "2022-09-11T03:03:58Z",
              updated_at: "2022-11-11T17:30:34Z",
              blur_hash: "L16t].t79Fxu_3j[IUxu9FD%IU_3",
              urls: {
                raw: "https://images.unsplash.com/photo-1662865433800-dae637c7b735?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1662865433800-dae637c7b735?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1662865433800-dae637c7b735?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1662865433800-dae637c7b735?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1662865433800-dae637c7b735?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1662865433800-dae637c7b735",
              },
            },
            {
              id: "d-UXzSjEPSM",
              created_at: "2022-11-04T16:09:47Z",
              updated_at: "2022-11-11T03:41:40Z",
              blur_hash: "LgIq}yt7Ioad00WBayoLE1ays.j[",
              urls: {
                raw: "https://images.unsplash.com/photo-1667578181464-cd30fa0cec8f?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667578181464-cd30fa0cec8f?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667578181464-cd30fa0cec8f?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667578181464-cd30fa0cec8f?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667578181464-cd30fa0cec8f?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667578181464-cd30fa0cec8f",
              },
            },
            {
              id: "1daoCfTCRyE",
              created_at: "2022-11-03T16:40:58Z",
              updated_at: "2022-11-11T11:44:55Z",
              blur_hash: "L55*OMGlo%SiE%y?c7m,czozi^Y6",
              urls: {
                raw: "https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667493620964-5db1a9529f14",
              },
            },
          ],
        },
        {
          id: "M8jVbLbTRws",
          slug: "architecture-interior",
          title: "Architecture & Interiors",
          description:
            "Exploring our built environments — from brutalist buildings to eccentric home decor. This category showcases the best of architecture and interiors from around the world. ",
          published_at: "2021-09-13T23:57:56Z",
          updated_at: "2022-11-09T13:17:13Z",
          starts_at: "2021-09-13T00:00:00Z",
          ends_at: null,
          only_submissions_after: "2021-10-31T12:00:00Z",
          visibility: "featured",
          featured: true,
          total_photos: 11755,
          current_user_contributions: [],
          total_current_user_submissions: null,
          links: {
            self: "https://api.unsplash.com/topics/architecture-interior",
            html: "https://unsplash.com/t/architecture-interior",
            photos:
              "https://api.unsplash.com/topics/architecture-interior/photos",
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
            id: "fFj2PLjPbUQ",
            created_at: "2022-10-25T12:47:55Z",
            updated_at: "2022-11-10T19:31:49Z",
            promoted_at: null,
            width: 4854,
            height: 3236,
            color: "#a6a6c0",
            blur_hash: "LNB~L_G^-5MIs:n~XARjWCWCWBj[",
            description: null,
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1666701948330-8eabe709ff87",
            },
            links: {
              self: "https://api.unsplash.com/photos/fFj2PLjPbUQ",
              html: "https://unsplash.com/photos/fFj2PLjPbUQ",
              download: "https://unsplash.com/photos/fFj2PLjPbUQ/download",
              download_location:
                "https://api.unsplash.com/photos/fFj2PLjPbUQ/download",
            },
            likes: 5,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              "architecture-interior": {
                status: "approved",
                approved_on: "2022-11-09T13:17:05Z",
              },
            },
            user: {
              id: "8nNURmzS8l0",
              updated_at: "2022-11-11T10:45:01Z",
              username: "iantalmacs",
              name: "Ian Talmacs",
              first_name: "Ian",
              last_name: "Talmacs",
              twitter_username: null,
              portfolio_url: null,
              bio: null,
              location: "Brazil",
              links: {
                self: "https://api.unsplash.com/users/iantalmacs",
                html: "https://unsplash.com/@iantalmacs",
                photos: "https://api.unsplash.com/users/iantalmacs/photos",
                likes: "https://api.unsplash.com/users/iantalmacs/likes",
                portfolio:
                  "https://api.unsplash.com/users/iantalmacs/portfolio",
                following:
                  "https://api.unsplash.com/users/iantalmacs/following",
                followers:
                  "https://api.unsplash.com/users/iantalmacs/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1667581386930-f57308789f8bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1667581386930-f57308789f8bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1667581386930-f57308789f8bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "iantalmacs",
              total_collections: 0,
              total_likes: 1,
              total_photos: 1042,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "iantalmacs",
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          preview_photos: [
            {
              id: "fFj2PLjPbUQ",
              created_at: "2022-10-25T12:47:55Z",
              updated_at: "2022-11-10T19:31:49Z",
              blur_hash: "LNB~L_G^-5MIs:n~XARjWCWCWBj[",
              urls: {
                raw: "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1666701948330-8eabe709ff87?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1666701948330-8eabe709ff87",
              },
            },
            {
              id: "6ozg4Daqtbc",
              created_at: "2022-11-06T07:21:20Z",
              updated_at: "2022-11-10T22:31:15Z",
              blur_hash: "LC97R$oJ0MM|IURPt6t79$R,=_xW",
              urls: {
                raw: "https://images.unsplash.com/photo-1667719275827-f982acd04b38?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667719275827-f982acd04b38?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667719275827-f982acd04b38?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667719275827-f982acd04b38?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667719275827-f982acd04b38?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667719275827-f982acd04b38",
              },
            },
            {
              id: "VlZLR_Jagqw",
              created_at: "2022-11-05T14:06:28Z",
              updated_at: "2022-11-11T03:41:41Z",
              blur_hash: "LbL}$+~X~qt7xuxuRiM{~WInM{of",
              urls: {
                raw: "https://images.unsplash.com/photo-1667657185531-6ef971294741?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667657185531-6ef971294741?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667657185531-6ef971294741?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667657185531-6ef971294741?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667657185531-6ef971294741?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667657185531-6ef971294741",
              },
            },
            {
              id: "gKJDUyF9hbs",
              created_at: "2022-11-07T07:03:05Z",
              updated_at: "2022-11-11T11:44:59Z",
              blur_hash: "LMDmK@R3M{V@T#xuslWBDNXoo}t6",
              urls: {
                raw: "https://images.unsplash.com/photo-1667803500072-78bccf92f75a?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667803500072-78bccf92f75a?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667803500072-78bccf92f75a?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667803500072-78bccf92f75a?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667803500072-78bccf92f75a?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667803500072-78bccf92f75a",
              },
            },
          ],
        },
        {
          id: "S4MKLAsBB74",
          slug: "fashion-beauty",
          title: "Fashion & Beauty",
          description:
            "Fashion and Beauty are a powerful form of self-expression. This category documents style through inspiring shots of street fashion, skincare products, avant-garde editorial photographs, and more. \r\n",
          published_at: "2020-04-06T14:20:18Z",
          updated_at: "2022-11-07T20:43:30Z",
          starts_at: "2020-04-15T00:00:00Z",
          ends_at: null,
          only_submissions_after: "2021-10-31T12:00:00Z",
          visibility: "featured",
          featured: true,
          total_photos: 7841,
          current_user_contributions: [],
          total_current_user_submissions: null,
          links: {
            self: "https://api.unsplash.com/topics/fashion-beauty",
            html: "https://unsplash.com/t/fashion-beauty",
            photos: "https://api.unsplash.com/topics/fashion-beauty/photos",
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
            id: "V8o7Kw1NSkw",
            created_at: "2022-10-04T18:03:03Z",
            updated_at: "2022-11-07T20:43:30Z",
            promoted_at: null,
            width: 4912,
            height: 7360,
            color: "#EFEFEF",
            blur_hash: "LDIgcsy:jHxaGc}iksT2~1X;NZ-4",
            description: null,
            alt_description: null,
            urls: {
              raw: "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3",
              full: "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1664879492592-4318cc60bf76",
            },
            links: {
              self: "https://api.unsplash.com/photos/V8o7Kw1NSkw",
              html: "https://unsplash.com/photos/V8o7Kw1NSkw",
              download: "https://unsplash.com/photos/V8o7Kw1NSkw/download",
              download_location:
                "https://api.unsplash.com/photos/V8o7Kw1NSkw/download",
            },
            likes: 3,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              "fashion-beauty": {
                status: "approved",
                approved_on: "2022-11-07T20:43:30Z",
              },
            },
            user: {
              id: "rEM5C31SktQ",
              updated_at: "2022-11-09T15:49:56Z",
              username: "nataliablauth",
              name: "Natália Blauth",
              first_name: "Natália",
              last_name: "Blauth",
              twitter_username: "nataliablauth",
              portfolio_url: "http://nataliablauth.com/",
              bio: "I'm a 32-year-old Brazilian woman who loves to hear people’s thoughts, in search for projects that impact deep in my soul.",
              location: "Brasil",
              links: {
                self: "https://api.unsplash.com/users/nataliablauth",
                html: "https://unsplash.com/@nataliablauth",
                photos: "https://api.unsplash.com/users/nataliablauth/photos",
                likes: "https://api.unsplash.com/users/nataliablauth/likes",
                portfolio:
                  "https://api.unsplash.com/users/nataliablauth/portfolio",
                following:
                  "https://api.unsplash.com/users/nataliablauth/following",
                followers:
                  "https://api.unsplash.com/users/nataliablauth/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1657464726975-5023cc73f695image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1657464726975-5023cc73f695image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1657464726975-5023cc73f695image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "nataliablauth",
              total_collections: 0,
              total_likes: 0,
              total_photos: 403,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "nataliablauth",
                portfolio_url: "http://nataliablauth.com/",
                twitter_username: "nataliablauth",
                paypal_email: null,
              },
            },
          },
          preview_photos: [
            {
              id: "V8o7Kw1NSkw",
              created_at: "2022-10-04T18:03:03Z",
              updated_at: "2022-11-07T20:43:30Z",
              blur_hash: "LDIgcsy:jHxaGc}iksT2~1X;NZ-4",
              urls: {
                raw: "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3",
                full: "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://plus.unsplash.com/premium_photo-1664879492592-4318cc60bf76?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1664879492592-4318cc60bf76",
              },
            },
            {
              id: "W3tBP-L8T60",
              created_at: "2022-08-04T17:59:38Z",
              updated_at: "2022-11-11T14:42:01Z",
              blur_hash: "L6L;mZkYx^ROI:aekDbF_4-oM{tS",
              urls: {
                raw: "https://images.unsplash.com/photo-1659635749898-e110570d6e78?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1659635749898-e110570d6e78?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1659635749898-e110570d6e78?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1659635749898-e110570d6e78?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1659635749898-e110570d6e78?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1659635749898-e110570d6e78",
              },
            },
            {
              id: "uKJ17IIgYZI",
              created_at: "2022-08-24T02:25:57Z",
              updated_at: "2022-11-11T06:29:57Z",
              blur_hash: "LFL4Z$Vs.8s-_NV?IVx]ELE0R+%M",
              urls: {
                raw: "https://images.unsplash.com/photo-1661307862384-ce4bfd88a416?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1661307862384-ce4bfd88a416?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1661307862384-ce4bfd88a416?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1661307862384-ce4bfd88a416?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1661307862384-ce4bfd88a416?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1661307862384-ce4bfd88a416",
              },
            },
            {
              id: "d0Itupzb-kA",
              created_at: "2022-08-24T02:26:58Z",
              updated_at: "2022-11-11T12:43:06Z",
              blur_hash: "LCF5y@IVJ:9[$|0L9Gs+tl.84n%1",
              urls: {
                raw: "https://images.unsplash.com/photo-1661307987465-1db8d7a8796f?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1661307987465-1db8d7a8796f?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1661307987465-1db8d7a8796f?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1661307987465-1db8d7a8796f?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1661307987465-1db8d7a8796f?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1661307987465-1db8d7a8796f",
              },
            },
          ],
        },
        {
          id: "BJJMtteDJA4",
          slug: "current-events",
          title: "Current Events",
          description:
            "Photographs influence how we understand the world around us. This category is all about capturing those news-worthy moments around the globe — from political protests to cultural celebrations. When submitting, please provide a photo description so we understand the full context of the image. ",
          published_at: "2020-04-17T02:29:52Z",
          updated_at: "2022-11-08T01:04:53Z",
          starts_at: "2017-08-01T00:00:00Z",
          ends_at: null,
          only_submissions_after: "2021-10-31T12:00:00Z",
          visibility: "featured",
          featured: true,
          total_photos: 6091,
          current_user_contributions: [],
          total_current_user_submissions: null,
          links: {
            self: "https://api.unsplash.com/topics/current-events",
            html: "https://unsplash.com/t/current-events",
            photos: "https://api.unsplash.com/topics/current-events/photos",
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
            id: "9ls4Uas7b0c",
            created_at: "2022-11-01T09:08:26Z",
            updated_at: "2022-11-11T06:31:34Z",
            promoted_at: null,
            width: 2000,
            height: 3000,
            color: "#59738c",
            blur_hash: "LDBzFMr=Acs:T#Rkt7ba4.X9VYRk",
            description:
              "Iranian Protests continue with unexpected numbers turning up during the day. They spread across Westminster and Trafalgar Square with a Human Chain and later into the evening, Burning of flags and people dancing into the night",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667293611925-4088a8ac5278",
            },
            links: {
              self: "https://api.unsplash.com/photos/9ls4Uas7b0c",
              html: "https://unsplash.com/photos/9ls4Uas7b0c",
              download: "https://unsplash.com/photos/9ls4Uas7b0c/download",
              download_location:
                "https://api.unsplash.com/photos/9ls4Uas7b0c/download",
            },
            likes: 9,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              "current-events": {
                status: "approved",
                approved_on: "2022-11-06T20:38:55Z",
              },
            },
            user: {
              id: "DGhEid0owbc",
              updated_at: "2022-11-11T03:01:52Z",
              username: "theeastlondonphotographer",
              name: "Ehimetalor Akhere Unuabona",
              first_name: "Ehimetalor Akhere",
              last_name: "Unuabona",
              twitter_username: "TheEastLDNTog",
              portfolio_url: "https://www.theeastlondonphotographer.com/",
              bio: "Portrait & Street Documentary Photographer sharing Sociopolitical, Portrait, and Street images from my personal archive to support your Content, Stories, and Work.\r\nInstagram @theeastlondonphotographer. Donations are well at: paypal.me/mettyunuabona ",
              location: "London, UK",
              links: {
                self: "https://api.unsplash.com/users/theeastlondonphotographer",
                html: "https://unsplash.com/@theeastlondonphotographer",
                photos:
                  "https://api.unsplash.com/users/theeastlondonphotographer/photos",
                likes:
                  "https://api.unsplash.com/users/theeastlondonphotographer/likes",
                portfolio:
                  "https://api.unsplash.com/users/theeastlondonphotographer/portfolio",
                following:
                  "https://api.unsplash.com/users/theeastlondonphotographer/following",
                followers:
                  "https://api.unsplash.com/users/theeastlondonphotographer/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1602499837447-54090944da0bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1602499837447-54090944da0bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1602499837447-54090944da0bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "TheEastLondonPhotographer",
              total_collections: 0,
              total_likes: 173,
              total_photos: 1099,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "TheEastLondonPhotographer",
                portfolio_url: "https://www.theeastlondonphotographer.com/",
                twitter_username: "TheEastLDNTog",
                paypal_email: null,
              },
            },
          },
          preview_photos: [
            {
              id: "9ls4Uas7b0c",
              created_at: "2022-11-01T09:08:26Z",
              updated_at: "2022-11-11T06:31:34Z",
              blur_hash: "LDBzFMr=Acs:T#Rkt7ba4.X9VYRk",
              urls: {
                raw: "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667293611925-4088a8ac5278?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667293611925-4088a8ac5278",
              },
            },
            {
              id: "CXTYhl0G5RQ",
              created_at: "2022-11-01T09:06:02Z",
              updated_at: "2022-11-10T20:32:14Z",
              blur_hash: "LLE_j$NaS~og?^ozr?xGJ7bvM{$i",
              urls: {
                raw: "https://images.unsplash.com/photo-1667293455348-8e30a4e27e0a?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667293455348-8e30a4e27e0a?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667293455348-8e30a4e27e0a?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667293455348-8e30a4e27e0a?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667293455348-8e30a4e27e0a?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667293455348-8e30a4e27e0a",
              },
            },
            {
              id: "QNWKFhKls4A",
              created_at: "2022-10-30T00:24:03Z",
              updated_at: "2022-11-10T19:31:55Z",
              blur_hash: "LTEV{BT1ibnO.mkrIAw]K6X9smjY",
              urls: {
                raw: "https://images.unsplash.com/photo-1667089242901-4616d40e8ae6?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667089242901-4616d40e8ae6?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667089242901-4616d40e8ae6?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667089242901-4616d40e8ae6?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667089242901-4616d40e8ae6?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667089242901-4616d40e8ae6",
              },
            },
            {
              id: "1H3DFjJtlnQ",
              created_at: "2022-10-30T00:24:03Z",
              updated_at: "2022-11-11T08:33:04Z",
              blur_hash: "LAA,avRiM{kW_NsRxBXn_2nN-px^",
              urls: {
                raw: "https://images.unsplash.com/photo-1667089243601-88eb0a13139e?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667089243601-88eb0a13139e?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667089243601-88eb0a13139e?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667089243601-88eb0a13139e?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667089243601-88eb0a13139e?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667089243601-88eb0a13139e",
              },
            },
          ],
        },
        {
          id: "6sMVjTLSkeQ",
          slug: "nature",
          title: "Nature",
          description:
            "Through photography, the beauty of Mother Nature can be frozen in time. This category celebrates the magic of our planet and beyond — from the immensity of the great outdoors, to miraculous moments in your own backyard.\r\n",
          published_at: "2020-04-06T14:20:12Z",
          updated_at: "2022-11-11T10:31:33Z",
          starts_at: "2020-04-15T00:00:00Z",
          ends_at: null,
          only_submissions_after: "2021-10-31T12:00:00Z",
          visibility: "featured",
          featured: true,
          total_photos: 24664,
          current_user_contributions: [],
          total_current_user_submissions: null,
          links: {
            self: "https://api.unsplash.com/topics/nature",
            html: "https://unsplash.com/t/nature",
            photos: "https://api.unsplash.com/topics/nature/photos",
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
            id: "l-na1tNlfKU",
            created_at: "2022-11-04T18:22:19Z",
            updated_at: "2022-11-11T10:31:13Z",
            promoted_at: null,
            width: 4160,
            height: 6240,
            color: "#40260c",
            blur_hash: "L4A9QD0%i|xG%LWCNxkBJBR+%0sn",
            description: null,
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667584413030-d4362e0f9481",
            },
            links: {
              self: "https://api.unsplash.com/photos/l-na1tNlfKU",
              html: "https://unsplash.com/photos/l-na1tNlfKU",
              download: "https://unsplash.com/photos/l-na1tNlfKU/download",
              download_location:
                "https://api.unsplash.com/photos/l-na1tNlfKU/download",
            },
            likes: 3,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              nature: {
                status: "approved",
                approved_on: "2022-11-11T10:31:13Z",
              },
            },
            user: {
              id: "2NxaMon8VcE",
              updated_at: "2022-11-11T10:32:04Z",
              username: "xoxnk",
              name: "Nico Knaack",
              first_name: "Nico",
              last_name: "Knaack",
              twitter_username: null,
              portfolio_url: "https://xoxnk.de",
              bio: "trying to learn something new",
              location: "Leipzig, Germany",
              links: {
                self: "https://api.unsplash.com/users/xoxnk",
                html: "https://unsplash.com/ja/@xoxnk",
                photos: "https://api.unsplash.com/users/xoxnk/photos",
                likes: "https://api.unsplash.com/users/xoxnk/likes",
                portfolio: "https://api.unsplash.com/users/xoxnk/portfolio",
                following: "https://api.unsplash.com/users/xoxnk/following",
                followers: "https://api.unsplash.com/users/xoxnk/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1662028865407-6df71fad63a3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1662028865407-6df71fad63a3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1662028865407-6df71fad63a3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "xoxnkay",
              total_collections: 0,
              total_likes: 91,
              total_photos: 174,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "xoxnkay",
                portfolio_url: "https://xoxnk.de",
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          preview_photos: [
            {
              id: "l-na1tNlfKU",
              created_at: "2022-11-04T18:22:19Z",
              updated_at: "2022-11-11T10:31:13Z",
              blur_hash: "L4A9QD0%i|xG%LWCNxkBJBR+%0sn",
              urls: {
                raw: "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667584413030-d4362e0f9481",
              },
            },
            {
              id: "GloRQMleD7M",
              created_at: "2022-11-04T18:22:19Z",
              updated_at: "2022-11-11T10:31:14Z",
              blur_hash: "LLDb[xIU-o%L~VM{-ot7xvf8xuNH",
              urls: {
                raw: "https://images.unsplash.com/photo-1667584412550-95241626c80a?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667584412550-95241626c80a?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667584412550-95241626c80a?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667584412550-95241626c80a?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667584412550-95241626c80a?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667584412550-95241626c80a",
              },
            },
            {
              id: "by-g6H-i1cQ",
              created_at: "2022-11-04T18:22:20Z",
              updated_at: "2022-11-11T10:31:14Z",
              blur_hash: "LIFOAH-6MxR-~V$eM{W=ofi_Nbbc",
              urls: {
                raw: "https://images.unsplash.com/photo-1667584412818-87450fcb55d5?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667584412818-87450fcb55d5?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667584412818-87450fcb55d5?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667584412818-87450fcb55d5?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667584412818-87450fcb55d5?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667584412818-87450fcb55d5",
              },
            },
            {
              id: "AiSitcoZEyk",
              created_at: "2022-10-24T15:16:21Z",
              updated_at: "2022-11-11T13:49:22Z",
              blur_hash: "LUEnhexZIpjt^jofR*ay1KS2sna|",
              urls: {
                raw: "https://images.unsplash.com/photo-1666624481302-3a9920b039b1?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1666624481302-3a9920b039b1?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1666624481302-3a9920b039b1?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1666624481302-3a9920b039b1?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1666624481302-3a9920b039b1?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1666624481302-3a9920b039b1",
              },
            },
          ],
        },
        {
          id: "xjPR4hlkBGA",
          slug: "food-drink",
          title: "Food & Drink",
          description:
            "From simple home-cooked dinners at home, to tasting new dishes while traveling — food connects us all. This category examines the world of food photography, with shots of everything from summer picnics in the park to decadent deserts.  ",
          published_at: "2020-04-06T14:20:20Z",
          updated_at: "2022-11-11T07:50:27Z",
          starts_at: "2020-04-15T00:00:00Z",
          ends_at: null,
          only_submissions_after: "2021-10-31T12:00:00Z",
          visibility: "featured",
          featured: true,
          total_photos: 8262,
          current_user_contributions: [],
          total_current_user_submissions: null,
          links: {
            self: "https://api.unsplash.com/topics/food-drink",
            html: "https://unsplash.com/t/food-drink",
            photos: "https://api.unsplash.com/topics/food-drink/photos",
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
            id: "2SVoqsW6vSk",
            created_at: "2022-11-11T05:54:14Z",
            updated_at: "2022-11-11T11:30:15Z",
            promoted_at: null,
            width: 5191,
            height: 3687,
            color: "#EFEFEF",
            blur_hash: "LA70e@oL1JayRkWWSzoKxDayR,oL",
            description: null,
            alt_description: null,
            urls: {
              raw: "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3",
              full: "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1668081838546-61867bfd2663",
            },
            links: {
              self: "https://api.unsplash.com/photos/2SVoqsW6vSk",
              html: "https://unsplash.com/photos/2SVoqsW6vSk",
              download: "https://unsplash.com/photos/2SVoqsW6vSk/download",
              download_location:
                "https://api.unsplash.com/photos/2SVoqsW6vSk/download",
            },
            likes: 0,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              "food-drink": {
                status: "approved",
                approved_on: "2022-11-11T07:50:26Z",
              },
            },
            user: {
              id: "64kyFq8sPR4",
              updated_at: "2022-11-11T15:52:09Z",
              username: "helloimnik",
              name: "Hello I'm Nik",
              first_name: "Hello I'm Nik",
              last_name: null,
              twitter_username: null,
              portfolio_url: null,
              bio: "Unsplash Community Team. Free and + Photos Available",
              location: "Somerset, UK",
              links: {
                self: "https://api.unsplash.com/users/helloimnik",
                html: "https://unsplash.com/@helloimnik",
                photos: "https://api.unsplash.com/users/helloimnik/photos",
                likes: "https://api.unsplash.com/users/helloimnik/likes",
                portfolio:
                  "https://api.unsplash.com/users/helloimnik/portfolio",
                following:
                  "https://api.unsplash.com/users/helloimnik/following",
                followers:
                  "https://api.unsplash.com/users/helloimnik/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1655281288855-01213158a4f2image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1655281288855-01213158a4f2image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1655281288855-01213158a4f2image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: null,
              total_collections: 45,
              total_likes: 2437,
              total_photos: 1091,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: null,
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          preview_photos: [
            {
              id: "2SVoqsW6vSk",
              created_at: "2022-11-11T05:54:14Z",
              updated_at: "2022-11-11T11:30:15Z",
              blur_hash: "LA70e@oL1JayRkWWSzoKxDayR,oL",
              urls: {
                raw: "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3",
                full: "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://plus.unsplash.com/premium_photo-1668081838546-61867bfd2663?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1668081838546-61867bfd2663",
              },
            },
            {
              id: "-Mb5GVZrGLg",
              created_at: "2022-11-11T05:54:01Z",
              updated_at: "2022-11-11T07:50:26Z",
              blur_hash: "LuK9|V5DV[ay~4s-NKfQRk$|oyR-",
              urls: {
                raw: "https://plus.unsplash.com/premium_photo-1668081838734-3a486889871c?ixlib=rb-4.0.3",
                full: "https://plus.unsplash.com/premium_photo-1668081838734-3a486889871c?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://plus.unsplash.com/premium_photo-1668081838734-3a486889871c?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://plus.unsplash.com/premium_photo-1668081838734-3a486889871c?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://plus.unsplash.com/premium_photo-1668081838734-3a486889871c?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1668081838734-3a486889871c",
              },
            },
            {
              id: "tSf9AIRqCdQ",
              created_at: "2022-11-11T05:53:40Z",
              updated_at: "2022-11-11T07:50:26Z",
              blur_hash: "LC8;DB?ZD*4qxrxtR,IV0MMzt7tQ",
              urls: {
                raw: "https://plus.unsplash.com/premium_photo-1668081838379-1283e496f651?ixlib=rb-4.0.3",
                full: "https://plus.unsplash.com/premium_photo-1668081838379-1283e496f651?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://plus.unsplash.com/premium_photo-1668081838379-1283e496f651?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://plus.unsplash.com/premium_photo-1668081838379-1283e496f651?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://plus.unsplash.com/premium_photo-1668081838379-1283e496f651?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1668081838379-1283e496f651",
              },
            },
            {
              id: "d1DXcZTl51k",
              created_at: "2022-11-11T05:53:33Z",
              updated_at: "2022-11-11T07:50:26Z",
              blur_hash: "LB8pcKEN0~xZkCoeNH%0Ncs:jFR+",
              urls: {
                raw: "https://plus.unsplash.com/premium_photo-1668081838613-6e601cc3b369?ixlib=rb-4.0.3",
                full: "https://plus.unsplash.com/premium_photo-1668081838613-6e601cc3b369?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://plus.unsplash.com/premium_photo-1668081838613-6e601cc3b369?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://plus.unsplash.com/premium_photo-1668081838613-6e601cc3b369?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://plus.unsplash.com/premium_photo-1668081838613-6e601cc3b369?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1668081838613-6e601cc3b369",
              },
            },
          ],
        },
        {
          id: "hmenvQhUmxM",
          slug: "film",
          title: "Film",
          description:
            "Let’s honor the beginnings of photography by celebrating analog from the past and present day. From vintage polaroids to mesmerizing 35mm shots — this category examines the best of what film photography has to offer. \r\n",
          published_at: "2020-04-06T14:20:16Z",
          updated_at: "2022-11-08T20:46:27Z",
          starts_at: "2020-04-15T00:00:00Z",
          ends_at: null,
          only_submissions_after: "2021-10-31T12:00:00Z",
          visibility: "featured",
          featured: true,
          total_photos: 7200,
          current_user_contributions: [],
          total_current_user_submissions: null,
          links: {
            self: "https://api.unsplash.com/topics/film",
            html: "https://unsplash.com/t/film",
            photos: "https://api.unsplash.com/topics/film/photos",
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
            id: "pk00ZA0rxs8",
            created_at: "2022-06-02T10:44:04Z",
            updated_at: "2022-11-11T07:30:14Z",
            promoted_at: null,
            width: 2433,
            height: 3637,
            color: "#f3f3f3",
            blur_hash: "LcLgwzs:s:M{_NR+xuRj?bs:WDog",
            description: null,
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1654161974932-e26cd97402a1",
            },
            links: {
              self: "https://api.unsplash.com/photos/pk00ZA0rxs8",
              html: "https://unsplash.com/photos/pk00ZA0rxs8",
              download: "https://unsplash.com/photos/pk00ZA0rxs8/download",
              download_location:
                "https://api.unsplash.com/photos/pk00ZA0rxs8/download",
            },
            likes: 22,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              film: {
                status: "approved",
                approved_on: "2022-11-07T11:33:09Z",
              },
            },
            user: {
              id: "PRoVms9W7ow",
              updated_at: "2022-11-10T16:16:38Z",
              username: "kxrabo",
              name: "Karabo Mdluli",
              first_name: "Karabo",
              last_name: "Mdluli",
              twitter_username: "Kxrabo",
              portfolio_url: "http://linktr.ee/kxrabo",
              bio: "𝐤𝐚𝐫𝐚𝐛𝐨 𝗺𝗱𝗹𝘂𝗹𝗶® // 🧿 التناسق\r\nResident Black Spider-Man ✖ ◑ Creative",
              location: "Johanessburg, South Africa",
              links: {
                self: "https://api.unsplash.com/users/kxrabo",
                html: "https://unsplash.com/@kxrabo",
                photos: "https://api.unsplash.com/users/kxrabo/photos",
                likes: "https://api.unsplash.com/users/kxrabo/likes",
                portfolio: "https://api.unsplash.com/users/kxrabo/portfolio",
                following: "https://api.unsplash.com/users/kxrabo/following",
                followers: "https://api.unsplash.com/users/kxrabo/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1652873063709-5cf3698bb4bfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1652873063709-5cf3698bb4bfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1652873063709-5cf3698bb4bfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "kxrabo",
              total_collections: 4,
              total_likes: 29,
              total_photos: 108,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: "kxrabo",
                portfolio_url: "http://linktr.ee/kxrabo",
                twitter_username: "Kxrabo",
                paypal_email: null,
              },
            },
          },
          preview_photos: [
            {
              id: "pk00ZA0rxs8",
              created_at: "2022-06-02T10:44:04Z",
              updated_at: "2022-11-11T07:30:14Z",
              blur_hash: "LcLgwzs:s:M{_NR+xuRj?bs:WDog",
              urls: {
                raw: "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1654161974932-e26cd97402a1?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1654161974932-e26cd97402a1",
              },
            },
            {
              id: "8AgzUlSkDOE",
              created_at: "2022-06-02T10:44:04Z",
              updated_at: "2022-11-11T10:35:42Z",
              blur_hash: "LgCtOlt8RPkC*0W=RPWXT1WBfkaz",
              urls: {
                raw: "https://images.unsplash.com/photo-1654161975339-9b5a34d05553?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1654161975339-9b5a34d05553?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1654161975339-9b5a34d05553?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1654161975339-9b5a34d05553?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1654161975339-9b5a34d05553?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1654161975339-9b5a34d05553",
              },
            },
            {
              id: "2FqnACjBGX0",
              created_at: "2022-06-02T10:44:04Z",
              updated_at: "2022-11-11T11:39:51Z",
              blur_hash: "LPCRQYIUIq-o5ax]t7IVq?M|n$xu",
              urls: {
                raw: "https://images.unsplash.com/photo-1654161975496-065c5d93391c?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1654161975496-065c5d93391c?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1654161975496-065c5d93391c?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1654161975496-065c5d93391c?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1654161975496-065c5d93391c?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1654161975496-065c5d93391c",
              },
            },
            {
              id: "4LSmM0Ts6Xc",
              created_at: "2022-06-02T10:44:04Z",
              updated_at: "2022-11-10T18:29:24Z",
              blur_hash: "L~N9d}bboKj[*Ja}WWa}PAjZbGj[",
              urls: {
                raw: "https://images.unsplash.com/photo-1654161909738-ad0b974406c0?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1654161909738-ad0b974406c0?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1654161909738-ad0b974406c0?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1654161909738-ad0b974406c0?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1654161909738-ad0b974406c0?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1654161909738-ad0b974406c0",
              },
            },
          ],
        },
        {
          id: "towJZFskpGg",
          slug: "people",
          title: "People",
          description:
            "Real people, captured. Photography has the power to reflect the world around us, give voice to individuals and groups within our communities — and most importantly — tell their story.\r\n",
          published_at: "2020-04-06T14:20:24Z",
          updated_at: "2022-11-07T19:04:46Z",
          starts_at: "2020-04-15T00:00:00Z",
          ends_at: null,
          only_submissions_after: "2021-10-31T12:00:00Z",
          visibility: "featured",
          featured: true,
          total_photos: 9398,
          current_user_contributions: [],
          total_current_user_submissions: null,
          links: {
            self: "https://api.unsplash.com/topics/people",
            html: "https://unsplash.com/t/people",
            photos: "https://api.unsplash.com/topics/people/photos",
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
            id: "8xpbGo0YlT8",
            created_at: "2022-11-05T01:20:51Z",
            updated_at: "2022-11-10T20:32:19Z",
            promoted_at: "2022-11-06T06:40:01Z",
            width: 4160,
            height: 6240,
            color: "#404026",
            blur_hash: "LcF}$LjEI;oy0LkCsmaetSWBxaa#",
            description: null,
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667611209778-ba82bd262af3",
            },
            links: {
              self: "https://api.unsplash.com/photos/8xpbGo0YlT8",
              html: "https://unsplash.com/photos/8xpbGo0YlT8",
              download: "https://unsplash.com/photos/8xpbGo0YlT8/download",
              download_location:
                "https://api.unsplash.com/photos/8xpbGo0YlT8/download",
            },
            likes: 43,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              people: {
                status: "approved",
                approved_on: "2022-11-07T12:42:56Z",
              },
            },
            user: {
              id: "an8MUg-lGrQ",
              updated_at: "2022-11-11T16:57:12Z",
              username: "mathildelangevin",
              name: "Mathilde Langevin",
              first_name: "Mathilde",
              last_name: "Langevin",
              twitter_username: "mathildlangevin",
              portfolio_url: "https://mathilde.ca/",
              bio: "Photographer & Contributor",
              location: "Montréal",
              links: {
                self: "https://api.unsplash.com/users/mathildelangevin",
                html: "https://unsplash.com/es/@mathildelangevin",
                photos:
                  "https://api.unsplash.com/users/mathildelangevin/photos",
                likes: "https://api.unsplash.com/users/mathildelangevin/likes",
                portfolio:
                  "https://api.unsplash.com/users/mathildelangevin/portfolio",
                following:
                  "https://api.unsplash.com/users/mathildelangevin/following",
                followers:
                  "https://api.unsplash.com/users/mathildelangevin/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1601327292565-cc4c02215d36image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1601327292565-cc4c02215d36image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1601327292565-cc4c02215d36image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "mathildlangevin",
              total_collections: 5,
              total_likes: 254,
              total_photos: 241,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "mathildlangevin",
                portfolio_url: "https://mathilde.ca/",
                twitter_username: "mathildlangevin",
                paypal_email: null,
              },
            },
          },
          preview_photos: [
            {
              id: "8xpbGo0YlT8",
              created_at: "2022-11-05T01:20:51Z",
              updated_at: "2022-11-10T20:32:19Z",
              blur_hash: "LcF}$LjEI;oy0LkCsmaetSWBxaa#",
              urls: {
                raw: "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667611209778-ba82bd262af3",
              },
            },
            {
              id: "C37YAyhu7wg",
              created_at: "2022-09-13T07:42:04Z",
              updated_at: "2022-11-07T10:17:22Z",
              blur_hash: "LRLD=GAI0K8_xDENWBRj?vofaJNF",
              urls: {
                raw: "https://plus.unsplash.com/premium_photo-1663054922022-8c0c43f72b5d?ixlib=rb-4.0.3",
                full: "https://plus.unsplash.com/premium_photo-1663054922022-8c0c43f72b5d?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://plus.unsplash.com/premium_photo-1663054922022-8c0c43f72b5d?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://plus.unsplash.com/premium_photo-1663054922022-8c0c43f72b5d?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://plus.unsplash.com/premium_photo-1663054922022-8c0c43f72b5d?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1663054922022-8c0c43f72b5d",
              },
            },
            {
              id: "Qq_EbjdTkzo",
              created_at: "2022-10-30T07:32:32Z",
              updated_at: "2022-11-11T04:31:25Z",
              blur_hash: "LDGuL1%KZ}%1~qSi%hITxC_3%h9F",
              urls: {
                raw: "https://images.unsplash.com/photo-1667114790613-23f1d1d1f1f5?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1667114790613-23f1d1d1f1f5?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1667114790613-23f1d1d1f1f5?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1667114790613-23f1d1d1f1f5?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1667114790613-23f1d1d1f1f5?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1667114790613-23f1d1d1f1f5",
              },
            },
            {
              id: "95OvC27uqiw",
              created_at: "2022-05-26T17:16:45Z",
              updated_at: "2022-11-11T17:28:05Z",
              blur_hash: "LB9@Fs%MxuWVXTkCR*s:0KWBRjWB",
              urls: {
                raw: "https://images.unsplash.com/photo-1653585247511-b9a4f87a4f10?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1653585247511-b9a4f87a4f10?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
                regular:
                  "https://images.unsplash.com/photo-1653585247511-b9a4f87a4f10?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small:
                  "https://images.unsplash.com/photo-1653585247511-b9a4f87a4f10?ixlib=rb-4.0.3&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                thumb:
                  "https://images.unsplash.com/photo-1653585247511-b9a4f87a4f10?ixlib=rb-4.0.3&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1653585247511-b9a4f87a4f10",
              },
            },
          ],
        },
        {
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
      ],
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
test("Sidebar visible", () => {
  render(
    <QueryClientProvider client={client}>
      <Sidebar
        isOpen={true}
        onClose={() => {}}
        setTopic={() => {}}
        topic={"nature"}
      />{" "}
    </QueryClientProvider>
  );
  const linkElement = screen.getByTestId("sidebar");
  expect(linkElement).toBeInTheDocument();
});

test("no Sidebar", () => {
  render(
    <QueryClientProvider client={client}>
      <Sidebar
        isOpen={false}
        onClose={() => {}}
        setTopic={() => {}}
        topic={"nature"}
      />{" "}
    </QueryClientProvider>
  );
  const linkElement = screen.getByTestId("sidebar");
  expect(linkElement).toBeEmptyDOMElement();
});
