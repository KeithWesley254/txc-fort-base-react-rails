# Phase 4 Project Moringa School
# Project Name:
TXC FortBase Fanbase Application
# Author:
KEITH WESLEY
# Description:
TXC FortBase is a fandom page for people who want to connect
with the heroes of the nation. You can get information about the
latest technologies in the TXC military and public researches.
Come and Connect

# User Story:
● As Keith Wesley, I want users to connect to their heroes on the battlefield and send motivational messages to them. I want to bridge the gap between soldiers and the population and make joining the military a more enticing choice of a career to those who may not see it that way.
<br>
● The military would benefit from a fanbase as it will raise troop morale, they will have a place where their comrades will be commemorated and have the general population want to join the army which will be of great use to their recruitment process.
<br>
● In the case of a user, a user can do the following:
    <br>
    ○ Create a profile
    <br>
    ○ Leave a comment
    <br>
    ○ Update their profile
    <br>
    ○ Delete their profile
    <br>
    ○ Login and logout
    <br>
    ○ View technology and stories
    <br>
    ○ View Soldiers and generals
    <br>
    ○ Any other information that may be added in the future for users


# Setup Instructions:

Here is a complete list of public endpoints:

    resources :login_page_slides, only: [:index, :show]
    resources :about_us, only: [:index, :show]
    resources :military_specializations, only: [:index, :show]
    resources :major_generals, only: [:index, :show]
    resources :platoons, only: [:index, :show]
    resources :memorials, only: [:index, :show]
    resources :technologies, only: [:index, :show]
    resources :trainings, only: [:index, :show]
    resources :soldiers, only: [:index, :show]
    resources :soldier_profiles, only: [:show]
    resources :soldier_trainings, only: [:create]
    resources :community_impacts, only: [:index, :show]
# Deployment Link:

https://txc-fortbase.herokuapp.com/

# License:

MIT License

Copyright (c) 2022 Keith Wesley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
